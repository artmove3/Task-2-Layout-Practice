const path = require('path')

// определяем здесь импорты для плагинов и реализовываем их как инстансы классов в массиве plugins

const HTMLWebpackPlugin = require('html-webpack-plugin')  // для работы с html
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // для очистки папки dist от кэша, при определении "забираем" из объекта
// //



module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', 
            favicon: '../favicons/favicon.ico'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}