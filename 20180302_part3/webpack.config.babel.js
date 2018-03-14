const path = require('path');

export default {
    'devtool': 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    'module': {
        'rules': [
            {
                test: /\.js/,
                use:[
                    {
                        'loader': 'babel-loader',
                        'options': {
                            'parserOpts': { 'parser': 'babylon'},
                            'presets': ['env'],
                            'plugins': ['transform-pipeline-operator']
                        }
                    }
                ]
            }
        ]
    }
};
