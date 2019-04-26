import React from "react"

const IndexPage = () => {
  return (
    <div>
      <h1>Shit Fuck Piss</h1>
      <p>{`The key is: ${process.env.GATSBY_SITE}`}</p>
      <p>{`The key is: ${process.env.GATSBY_USER}`}</p>
      <p>{`The key is: ${process.env.GATSBY_PASSWORD}`}</p>
    </div>
  )
}

export default IndexPage
