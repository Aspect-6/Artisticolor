const path = require("path")
const { readdirSync: readdir } = require("fs")

//Plugins
const HTMLPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
    
    mode: "development",

    resolve: {
        plugins: [new TSConfigPathsPlugin()],
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },

    entry: {
        index: ["./src/app/index", "./src/ts/index"],
        profile: ["./src/app/profile", "./src/ts/profile"],
        projects: ["./src/app/projects", "./src/ts/projects"],
        register: ["./src/app/register", "./src/ts/register"],
    },
    //Output files to a dist folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        //Add HTML files
        ...readdir("./src/pages")
            .filter((file) => !file.includes("Icon"))
            .map((file) => file.split(".")[0])
            .map(
                (file) =>
                    new HTMLPlugin({
                        template: `./src/pages/${file}.html`,
                        inject: true,
                        chunks: [file],
                        filename: `${file}.html`,
                    })
            ),
        //Copy images and icons
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/",
                    globOptions: {
                        ignore: ["**/styles", "**/images", "**/.DS_Store"],
                    },
                },
            ],
        }),
        //Generate CSS files
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
}
