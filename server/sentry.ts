import { Express } from "express"
import * as Sentry from "@sentry/node"

Sentry.init({ dsn: `https://c09eb8a2064240249ba751fcc1fa814c@sentry.io/1828333` })

// Initialize Sentry.
export function initSentry(app: Express) {
  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.errorHandler())
}
