import path from 'path';
const publicPath = path.join(__dirname, 'public');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: publicPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
           use: [
                'style-loader',
                'css-loader',
                'sass-loader'
           ],
           test: /\.scss$/
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicPath
    },
    mode: 'development'
}; 