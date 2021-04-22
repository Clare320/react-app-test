const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    let configs = {};

    configs = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '/dist')
        },
        module: {
            rules: [
                { 
                    test: /\.css$/,
                    use: 'css-loader'
                },
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                }
            ]
        }
    };

    return configs;
  }