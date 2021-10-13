const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 80;
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log("Application starting on port " + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/page1.html");
});

app.post("/", (req, res) => {
  page = determine_page(req.body.message);
  res.sendFile(__dirname + page);
});

function determine_page(message) {
  if (message == 'Hello Engineers!') {
    return "/page2.html";
  } else {
    return "/page1.html";
  }
}