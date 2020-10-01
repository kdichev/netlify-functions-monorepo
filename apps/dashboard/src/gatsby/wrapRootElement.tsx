import React from "react"

export const wrapRootElement = ({ element }) => {
  console.log("wrapRootElement")
  return (
    <div>
      <h1>title</h1>
      {element}
    </div>
  )
}
