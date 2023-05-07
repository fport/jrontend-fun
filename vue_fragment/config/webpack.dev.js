const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
        port: 3002,
        historyApiFallback: {
            index: 'index.html',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'vue_fragment',
            filename: 'remoteEntry.js',
            exposes: {
                './vue_fragmentApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
