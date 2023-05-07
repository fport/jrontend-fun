const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'react-composer',
            remotes: {
                marketing: 'react-composer@http://localhost:3000/remoteEntry.js',
                react_fragment: 'react_fragment@http://localhost:3001/remoteEntry.js',
                vue_fragment: 'vue_fragment@http://localhost:3002/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
