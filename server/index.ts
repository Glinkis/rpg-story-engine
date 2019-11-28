/* eslint-disable @typescript-eslint/no-non-null-assertion */
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import config from "../webpack.config"

import compression from "compression"
import express from "express"
import chalk from "chalk"

import { initSentry } from "./sentry"
import { initReactSSR } from "./react"
import { initEndpoints } from "./endpoints"

config.entry![`server`] = `webpack/hot/dev-server`
config.entry![`client`] = `webpack-hot-middleware/client`

export const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

initSentry(app)
initReactSSR(app)
initEndpoints(app)

function createRouteListItem(html: string, route: any) {
  if (route.route) {
    // Ignore root and client routes.
    if ([`/`, `/client`].includes(route.route.path)) {
      return html
    }
    return `${html}\n<li><a href="${route.route.path}">${route.route.path}</a></li>`
  }
  return html
}

/**
 * Displays a list of available endpoints.
 */
app.get(`/`, (req, res) => {
  res.header(`Content-Type`, `text/html`)
  res.send(`
    <a href="/client">Client</a>
    <h1>Available Endpoints:</h1>
    <ul>${app._router.stack.reduce(createRouteListItem, ``)}</ul>
  `)
})

app.listen(process.env.PORT || 5000, () => {
  console.clear()
  console.log(chalk.green(`The server has started, and is available at:`))
  console.log(chalk.cyan(`http://localhost:5000`))
})
