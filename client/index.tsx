import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"

// With this, wehydrate the already server-side rendered
// content, making it fully dynamic while keeping it blazing™ fast.
ReactDOM.hydrate(<App />, document.querySelector(`[data-reactroot]`), () => {
  console.log(`Hydration complete!`)
})
