module.exports = {
    entry: ['./src/app/index.jsx'],
    output: {
        path: __dirname,
        filename: './src/public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
