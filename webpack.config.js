
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const loadModeConfig = env => require(`./build-utis/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');



module.exports = env => webpackMerge({
    mode: env.mode,
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        name: '[path]/[name].[ext]',
                        limit: 5000,    
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
              },
            { test: /\.hbs$/,
                 use: "handlebars-loader" }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
},
loadModeConfig(env)
);

