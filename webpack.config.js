// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// module.exports = {
//     //	https://webpack.js.org/configuration/mode/
//     mode: 'development',
//     entry: {
//         index: './src/index.js',
//         algolia: './src/algolia.js',
//         firebase: './src/firebase.js'
//     },
//     output: {
//         filename: "[name].bundle.js",
//         //filename: "main.js",
//         //		path: path.resolve(__dirname, "public") Can change directory name
//         path: path.resolve(__dirname, "public")
//     },
//     // Can change the entry name
//     // entry: "./mbuzi/mbuzide.js",
//     devServer: {
//         contentBase: path.join(__dirname, "public"),
//         port: 9003
//     },
//     optimization: {
//         //		splitChunks: {
//         //			chunks: 'all'
//         //		}
//         minimizer: [new UglifyJsPlugin()]
//     },
//     plugins: [new HtmlWebpackPlugin({
//         title: "Webpack Cheatsheet",
//     })],
//     module: {
//         rules: [{
//                 // Whenever a javascript file is found, babel should run and do not compile node_module files
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         // Supports all the browsers
//                         presets: ['@babel/preset-env', '@babel/preset-react']
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     { loader: 'style-loader' },
//                     { loader: 'css-loader' }
//                 ]
//             },

//             // Start here for the URL Loader
//             {
//                 test: /\.(png|jpg)$/,
//                 use: [
//                     { loader: 'url-loader' }
//                 ]
//             }
//         ]
//     }
// }

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); // to access built-in plugins


module.exports = {
    mode: 'development',
    // entry: {
    //     index: './src/index.ejs',
    //     algolia: './src/algolia.ejs',
    //     firebase: './src/firebase.ejs'
    // },
    entry: './src/index.js',
    output: {
        // filename: "[name].bundle.js",
        filename: 'main.js',
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        // Generates default index.html
        // new HtmlWebpackPlugin({
        //     title: 'Home',
        //     filename: 'index.html',
        //     template: './src/index.ejs'
        // }),

        // // about.html
        // new HtmlWebpackPlugin({
        //     title: 'Algolia',
        //     filename: 'algolia.html',
        //     template: './src/algolia.ejs'
        // }),

        // // contact.html
        // new HtmlWebpackPlugin({
        //     title: 'Firebase',
        //     filename: 'firebase.html',
        //     template: './src/firebase.ejs'
        // })
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};