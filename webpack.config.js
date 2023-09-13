const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    target: 'node',
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
        }
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    webpack: {
        configure: {
          resolve: {
            fallback: {
              "path": require.resolve("path-browserify")
            },
          },
        },
      },
};