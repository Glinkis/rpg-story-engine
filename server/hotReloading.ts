/* eslint-disable @typescript-eslint/no-non-null-assertion */
import webpack from "webpack"
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import { Express } from "express"

import config from "../webpack.config"

config[0].entry![`client`] = `webpack-hot-middleware/client`
config[1].entry![`server`] = `webpack/hot/dev-server`

const compiler = webpack(config)

//enable webpack middleware for hot-reloads in development
export function initWebpackMiddleware(app: Express) {
  app.use(webpackDevMiddleware(compiler))

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
    })
  )

  return app
}
