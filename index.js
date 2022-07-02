const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Ok" });
});

app.post("/", (req, res) => {
  if (req.query.msg === "OK") {
    res.status(200).json({ msg: "Ok" });
  } else {
    res.status(400).json({ err: "Err" });
  }
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = {
  sum: (a, b) => a + b,
  res: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
};
