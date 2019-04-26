import React from "react"

const IndexPage = () => {
  let date = new Date()
  let newDate = date.getSeconds()
  return (
    <div>
      <h1>{newDate}</h1>
      <p>{`The key is: ${process.env.GATSBY_SITE}`}</p>
      <p>{`The key is: ${process.env.GATSBY_USER}`}</p>
      <p>{`The key is: ${process.env.GATSBY_PASSWORD}`}</p>
    </div>
  )
}

export default IndexPage
