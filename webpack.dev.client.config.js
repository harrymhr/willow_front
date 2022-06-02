const webpack = require('webpack')
const path = require('path')

const webpackDevConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|public\/)/,
        include: path.join(__dirname, 'src'),
        use:['babel-loader']
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: ['url-loader?limit=8192']
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader']
      }, {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV),
      'process.env.BROWSER': JSON.stringify(true)
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = webpackDevConfig
