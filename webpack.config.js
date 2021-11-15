const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: "development",
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, "dist"),
    // the filename of the JS bundle will be bundle.js
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
    ],
  },
  // add a custom index.html as the template
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, "src", "index.html"),
      template: "./src/index.html",
      publicPath: "/",
    }),
    new Dotenv({
      path: "./configurations/dev.env",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
