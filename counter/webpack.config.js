
module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /(bower_components|node_modules)/,
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
};