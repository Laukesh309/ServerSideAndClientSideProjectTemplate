import React from 'react'
const express = require("express")
const app = express()
import { renderToString } from "react-dom/server"
import App from '../Router/app'
import { StaticRouter } from "react-router-dom/server";

app.use(express.static("public"))
app.get("*", (req, res) => {
  let componetServerComponent = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  let htmlContent = `<html><head></head><body><div id="root">${componetServerComponent}</div><script src="/bundle.js" type="module"></script></body></html>`
  res.send(htmlContent)
})


app.listen(3000, () => {
  console.log("\n\n\n allListenAtPort===>3000")
})