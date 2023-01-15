const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        // For the images to be loaded in the browser
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
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

                    // PostCSS
                    { loader: 'postcss-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' },
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ],
            },
            {
                test: /\.png|jpeg/,
                type: 'asset/resource'
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg|png|jpg|jpeg)(\?[\s\S]+)?$/,
                use: 'file-loader',
                type: 'asset/resource'
            }
        ]
    },

    devtool: 'source-map',

    target: 'web',

    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['public/']
        },
        port: 2014
    },

    performance: {
        hints: false,
    }
};