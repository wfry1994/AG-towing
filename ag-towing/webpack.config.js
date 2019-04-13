const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        '@babel/polyfill',
        './src/scripts/'
    ],
    module: {
        loaders: [
            {test: /.json$/, loader: 'json-loader'},
            {test: /.json$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.scss|\.css$/, 
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                    }
                )
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/public/scripts/`,
        publicpath: '/ag-towing/scripts/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            dead_code: true,
            minimize: true,
        }),
        new ExtractTextPlugin('../styles/style.css')

    ],
    resolve: {
        extentions: [
            '.js',
            '.json',
            '.jsx',
        ],
    },



}