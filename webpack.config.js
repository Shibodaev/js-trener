//Источник https://www.youtube.com/watch?v=eSaF8NXeNsA&t=2897s
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* Установку пакетов делаем с флагом -D то есть зависимости для разработки (package.json "devDependencies") */
module.exports = {
    context: path.resolve(__dirname, "src"), /*  Указываю папку в которой разработка идет */
    entry: './app.js', /* Вход */
    output: {
        filename: '[name].[contenthash].js', /* выход в папку DIST С именем и хешем */
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js','.json','.scss','.pug' /*прописав   alias , можно скоратить путь при импорте*/
        ],
    //     // alias: [
    //     //     {
    //     //         // name: какой-то путь
    //     //     }
    //     // ]
    },

    //---------------------ВАЖНО--------------------------
    // взять На заметку прикрутить к рабочей сборке
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
    //---------------------ВАЖНО--------------------------
    module: {
        rules: [
            {
                test: /\.css$/,  /* Через регулярное выражение говорю какие импорты в  js обрабатывать */
                use: ['style-loader','css-loader'] /* Лоадеры предварительно надо уствновить, webpack обрабатывает с право на лево то есть 1.css-loader 2.style-loader */
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html' /*  Шаблон Html который webpack подхватывает для выхода */
            }
        ),
        new CleanWebpackPlugin() /* очистка папки DIST перед обновлением */,
    ]
}
