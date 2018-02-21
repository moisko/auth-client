const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
