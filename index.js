require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "Ok" });
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "this is the main branch" });
});

app.post("/", (req, res) => {
  if (req.query.msg === "OK") {
    res.status(200).json({ msg: "Ok" });
  } else {
    res.status(400).json({ err: "Err" });
  }
});

const server = app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

module.exports = {
  app,
  server,
};
