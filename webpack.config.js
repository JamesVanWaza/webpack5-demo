const path = require('path');

const mode = process.env.NODE_ENV || 'production' ? 'production' :
    'development';

module.exports = {
    mode: mode,

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                // without additional configuration, babel-loader will use the .babelrc file
                loader: "babel-loader"
            }
        }]
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
    }
};