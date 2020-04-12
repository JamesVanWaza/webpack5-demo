const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); // to access built-in plugins

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        algolia: './src/js/algolia.js',
        firebase: './src/js/firebase.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    { loader: 'style-loader' },

                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        // Algolia Page
        new HtmlWebpackPlugin({
            title: 'Algolia',
            filename: 'algolia.html',
            template: './src/html-templates/algolia-template.html'
        }),
        // Firebase Page
        new HtmlWebpackPlugin({
            title: 'Firebase',
            filename: 'firebase.html',
            template: './src/html-templates/firebase-template.html'
        }),
        // Home Page
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorials',
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        })
    ]
};