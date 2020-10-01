import { GatsbyBrowser } from "gatsby"
import React from "react"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  console.log("wrapRootElement Browser")
  return (
    <div>
      <h1>title</h1>
      {element}
    </div>
  )
}
