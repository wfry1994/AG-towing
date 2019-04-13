const _ = require('underscore')
const webpack = require('webpack')

module.exports = _(require('./webpack.config'))
    .chain()
    .clone()
    .extend({
        entry: [
            'webpack-hot-middleware/client?path=http://localhost:3798/__webpack_hmr?reload=true',
            '@babel/polyfill',
            'react-hot-loader/patch',
            './src/scripts/index',
        ],
        module: {
            loaders: [
                {test: /.json$/, loader: 'json-loader'},
                {test: /.json$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /.css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], },
            ],
        },
        devtool: 'cheap-module-inline-source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"development"',
                },
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
        ],
    })
    .value()