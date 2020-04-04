module.exports = {
  entry: [ //Informa qual é o arquivo principal
    '@babel/polyfill',
    './src/main.js'
  ],
  output: { // Informa onde será gerado o arquivo
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  }
}