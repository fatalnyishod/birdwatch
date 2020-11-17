const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s*)ass$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new miniCss({
      filename: 'style.css'
    })
  ]
};
