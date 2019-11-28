import { Configuration, HotModuleReplacementPlugin } from "webpack"

const config: Configuration = {
  entry: `./client/`,
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
  },
  plugins: [new HotModuleReplacementPlugin()],
}

export default config
