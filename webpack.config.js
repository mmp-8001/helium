const path = require('path');
module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "main.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
};