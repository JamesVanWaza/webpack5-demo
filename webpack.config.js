const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack"); // to access built-in plugins

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        algolia: './src/js/algolia.js',
        firebase: './src/js/firebase.js'
    },
    output: {
        filename: "[name].bundle.js",
        //filename: "main.js",
        //		path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2011
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
                test: /\.(ttf|eot|svg|png|jpg|jpeg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        // Home Page
        new HtmlWebpackPlugin({
            title: 'Responsive Navbar Tutorial',
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        // Algolia Page
        new HtmlWebpackPlugin({
            title: 'Algolia Tutorial',
            filename: 'algolia.html',
            template: './src/html-templates/algolia-template.html'
        }),
        // Firebase Page
        new HtmlWebpackPlugin({
            title: 'Firebase Tutorial',
            filename: 'firebase.html',
            template: './src/html-templates/firebase-template.html'
        }),
        // Favicon
        new FaviconsWebpackPlugin({
            logo: './src/images/W-Favicon002@4x.png'
        })
    ]
};