var webpack = require('webpack');
var path = require('path');

var libraryName = 'bib2hugo';

var config = {
    mode: 'development',
    entry: path.join(__dirname, libraryName + '.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: libraryName + '.bundle.js',
        libraryTarget: 'umd',
        library: libraryName
    },
    target: 'node',
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }
        ]
    }
};

module.exports = config;