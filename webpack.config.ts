import { Configuration } from "webpack"

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
}

export default config
