const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); // to access built-in plugins

module.exports = {
    mode: 'development',
    entry: {
        index: './js/index.js',
        algolia: './js/algolia.js',
        firebase: './js/firebase.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
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
            }
        ]
    },
    plugins: [
        // Algolia Page
        new HtmlWebpackPlugin({
            title: 'Algolia',
            filename: 'algolia.html',
            template: './html-templates/algolia-template.html'
        }),
        // Firebase Page
        new HtmlWebpackPlugin({
            title: 'Firebase',
            filename: 'firebase.html',
            template: './html-templates/firebase-template.html'
        }),
        // Home Page
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorials',
            filename: 'index.html',
            template: './html-templates/index-template.html'
        })
    ]
};