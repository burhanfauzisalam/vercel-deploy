const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Deployment nodejs app to vercel",
  });
});

app.get("/hello", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Hello, this is my nodejs app on vercel",
  });
});

app.listen(8000, () => {
  console.log(`App started on port 8000`);
});

module.exports = app;
