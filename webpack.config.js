const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'recipio-proto.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Recipio Prototype",
            template: "index.html"
        })
    ]
};