import React from "react"
import { GatsbySSR } from "gatsby"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
  element,
}): any => {
  return (
    <div>
      <h1>title</h1>
      {element}
    </div>
  )
}
