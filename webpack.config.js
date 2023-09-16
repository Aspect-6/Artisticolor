const path = require("path")

const HTMLFile = (htmlWebpackPlugin) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${htmlWebpackPlugin.options.title}</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
`

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
        index: "./src/index",
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
        //HTML Plugins
        new HTMLPlugin({
            title: "Home",
            filename: "index.html",
            templateContent: ({ htmlWebpackPlugin }) => HTMLFile(htmlWebpackPlugin),
        }),
        new HTMLPlugin({
            title: "Profile",
            filename: "profile.html",
            templateContent: ({ htmlWebpackPlugin }) => HTMLFile(htmlWebpackPlugin),
        }),
        new HTMLPlugin({
            title: "Projects",
            filename: "projects.html",
            templateContent: ({ htmlWebpackPlugin }) => HTMLFile(htmlWebpackPlugin),
        }),
        new HTMLPlugin({
            title: "Register",
            filename: "register.html",
            templateContent: ({ htmlWebpackPlugin }) => HTMLFile(htmlWebpackPlugin),
        }),

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
