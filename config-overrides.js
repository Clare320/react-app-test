const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    let configs = config;

    configs.entry = './src/index.js';
    configs.output = {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist')
    };

    if (configs.module && configs.module.rules) {
        configs.module.rules.push([
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]);
    } else {
        configs.module = {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader'
                }
            ]
        };
    }

    return configs;
  }