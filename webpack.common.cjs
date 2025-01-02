const path = require('path');
/////////////////////////////
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: './src/background.ts',
        //////////////////////////////////
        options: './src/options.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.(js|ts)x?$/, use: ['esbuild-loader'], exclude: /node_modules/ }
        ],
    },
    plugins: [
        new CopyPlugin({ patterns: [{ from: 'static' }] })
    ],
};
