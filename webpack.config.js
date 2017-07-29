var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  devtool:'source-map',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/stylesheets'),
        // loaders: ["style-loader", "css-loader", "sass-loader"]
        loader: "style-loader!css-loader!resolve-url-loader!sass-loader"
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
