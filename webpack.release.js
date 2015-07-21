var webpack = require('webpack');
var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = {
    entry: './App-src/index.js',
    output: {
        path: __dirname + '/App',
        filename: 'app.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({compress: {
            drop_console: true
        }}),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.AggressiveMergingPlugin(),
    ],
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'less']
    },
    watch: false,
    lessLoader: {
        lessPlugins: [
            new LessPluginCleanCSS({advanced: true})
        ]
    },
    module: {
        lessLoader: {
            lessPlugins: [
                new LessPluginCleanCSS({advanced: true})
            ]
        },
        loaders: [
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100&minetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100&minetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100&minetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100&minetype=image/svg+xml' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.jsx$/, loader: 'jsx-loader!babel-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
