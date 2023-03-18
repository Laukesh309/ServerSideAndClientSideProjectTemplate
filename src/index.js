const React = require("react")
const express = require("express")
const app = express()
const renderToString = require("react-dom/server").renderToString
const App = require("../Router/App").default

app.use(express.static("public"))


app.get("*", (req, res) => {
  let componetServerComponent = renderToString(<App />)
  let htmlContent = `<html><head></head><body><div id="root">${componetServerComponent}</div><script src="/bundle.js" type="module"></script></body></html>`
  res.send(htmlContent)
})


app.listen(3000, () => {
  console.log("\n\n\n allListenAtPort===>3000")
})