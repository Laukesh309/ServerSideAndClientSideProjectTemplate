const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.send("this is testing")
})


app.listen(3000, () => {
  console.log("\n\n\n allListenAtPort===>3000")
})