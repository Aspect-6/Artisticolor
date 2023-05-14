const path = require('path');

//Webpack Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {

    mode: 'development',

    // devServer: {
    //     static: 'dist',
    //     client: { logging: 'error' },
    //     compress: true,
    //     port: 8000,
    // },
    


    resolve: {
        fallback: {
            //fs: require.resolve('browserify-fs'),
            //path: require.resolve('path-browserify')
        },
        alias: {
            js: path.resolve(__dirname, 'src/js'),
            styles: path.resolve(__dirname, 'src/assets/styles'),
            utils: path.resolve(__dirname, 'src/utils'),
            anim: path.resolve(__dirname, 'src/utils/anim'),
            error: path.resolve(__dirname, 'src/utils/anim/error'),
            attach: path.resolve(__dirname, 'src/utils/attach/attach'),
        }
    },

    entry: {
        index: ["/src/js/index", "/src/js/login"],
        profile: ["/src/js/profile", "/src/js/login"],
        projects: ["/src/js/projects", "/src/js/login"],
        register: ["/src/js/register"],
    },
    //Output files to dist folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    module: {
        rules: [{
            test:/\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        }]
    },

    plugins: [
        //Load core node_modules
        //new NodePolyfillPlugin(),

        //Generate HTML pages
        new HTMLWebpackPlugin({
            template: 'src/pages/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
        }),
        new HTMLWebpackPlugin({
            template: 'src/pages/profile.html',
            inject: true,
            chunks: ['profile'],
            filename: 'profile.html',
        }),
        new HTMLWebpackPlugin({
            template: 'src/pages/projects.html',
            inject: true,
            chunks: ['projects'],
            filename: 'projects.html',
        }),
        new HTMLWebpackPlugin({
            template: 'src/pages/register.html',
            inject: true,
            chunks: ['register'],
            filename: 'register.html',
        }),
        
        //Generate CSS files
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),

        //Copy images and icons
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets/',
                    globOptions: {
                        ignore: ['**/styles']
                    },
                }
            ]
        }),
    ],

    //target: 'webworker'
};
//Add init.js to all bundles
for (const key in module.exports.entry) module.exports.entry[key].push('/src/js/init');