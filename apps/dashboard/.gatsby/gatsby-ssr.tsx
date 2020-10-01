import React from "react"
import { GatsbySSR } from "gatsby"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = async ({
  element,
}) => {
  console.log("wrapRootElement SSR")
  return (
    <div>
      <h1>title</h1>
      {element}
    </div>
  )
}
