const path = require('path');
const { readdirSync: readdir } = require('fs')

//Plugins
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    resolve: { 
        alias: {
            js: path.resolve(__dirname, 'src/js'),
            styles: path.resolve(__dirname, 'src/assets/styles'),
            utils: path.resolve(__dirname, 'src/lib/utilities'),
            lib: path.resolve(__dirname, 'src/lib'),
            anim: path.resolve(__dirname, 'src/lib/utilities/anim'),
            error: path.resolve(__dirname, 'src/lib/utilities/anim/error'),
            firebasedb: path.resolve(__dirname, 'src/lib/utilities/firebase'),
            components: path.resolve(__dirname, 'src/components')
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },

    entry: {
        index: ['./src/index', './src/app/index', './src/js/login', './src/js/index'],
        profile: ['./src/index', './src/app/profile', './src/js/login', './src/js/profile'],
        projects: ['./src/index', './src/app/projects', './src/js/login', './src/js/projects'],
        register: ['./src/index', './src/app/register', './src/js/register'],
    },
    //Output files to a dist folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    module: { 
        rules: [{
            test:/\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
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
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },

    plugins: [
        //Add HTML files
        ...readdir('src/pages').map(file => file.split('.')[0]).map(file => new HTMLPlugin({
            template: `src/pages/${file}.html`,
            inject: true,
            chunks: [file],
            filename: `${file}.html`,
        })),
        //Copy images and icons
        new CopyPlugin({
            patterns: [{
                from: 'src/assets/',
                globOptions: {
                    ignore: ['**/styles']
                },
            }]
        }),
        //Generate CSS files
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
};