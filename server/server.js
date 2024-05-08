const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Dashboard" });
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Home page" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
