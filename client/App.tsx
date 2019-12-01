import React, { useState } from "react"
import styled from "@emotion/styled"

const FancyButton = styled.button({
  "margin": 32,
  "padding": 32,
  "border": `4px solid #014`,
  "borderRadius": 32,
  "backgroundColor": `#fefefe`,
  "boxShadow": `2px 2px 24px rgba(3, 16, 48, 0.3)`,
  "fontSize": 24,
  "fontWeight": 500,
  "fontFamily": `sans-serif`,
  "&:focus": {
    outline: `none`,
    borderColor: `#6cf`,
  },
})

export function App() {
  const [state, setState] = useState(`Click me!`)

  const onClick = () => {
    setState(`Hydration works!`)
  }

  return <FancyButton onClick={onClick}>{state}</FancyButton>
}
