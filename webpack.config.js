const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/js/index.js',
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        // For the images to be loaded in the browser
        assetModuleFilename: 'assets/resource/[hash][ext][query]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),

        new HtmlWebpackPlugin({
            filename: 'signin.html',
            template: './src/html-templates/signin-template.html'
        }),

        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: './src/html-templates/signup-template.html'
        }),

        new FaviconsWebpackPlugin('./src/images/W5-Favicon-Color@4x.png')
    ],

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                // without additional configuration, babel-loader will use the .babelrc file
                loader: "babel-loader"
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS Strings
                { loader: 'style-loader' },

                // Translates CSS into CommonJS
                { loader: 'css-loader' },

                // Compiles Sass to CSS
                { loader: 'sass-loader' },
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        ]
    },

    devtool: 'source-map',

    target: 'web',

    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2014
    },

    performance: {
        hints: false,
    }
};