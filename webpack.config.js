const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath: '/',
    },
    target: "web",
    devServer: {
        port: "3000",
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".svg"],
        alias: {
            "@views": path.resolve(__dirname, "src/views"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@enums": path.resolve(__dirname, "src/enums")
        }
    },
    module: {
        rules: [
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.svg/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};
