const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    build: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../../docs'),
    publicPath: '',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              // eslint-disable-next-line global-require
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          esModule: false,
        },
      },
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json', 'sass'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  plugins: [new VueLoaderPlugin()],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
}
