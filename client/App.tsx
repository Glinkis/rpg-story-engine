import React, { useState } from "react"

export function App() {
  const [state, setState] = useState(`Click me!`)

  function onClick() {
    setState(`Hydration works!`)
  }

  return <button onClick={onClick}>{state}</button>
}
