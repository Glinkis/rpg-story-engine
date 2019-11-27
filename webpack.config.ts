import { Configuration } from "webpack"

const config: Configuration = {
  entry: `./client/`,
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: `ts-loader`,
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          compilerOptions: { noEmit: false },
        },
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
  },
}

export default config
