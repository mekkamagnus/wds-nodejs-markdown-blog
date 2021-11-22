// Create server
const express = require("express");
// Get app variable
const app = express();

// Create route at index
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create route
app.listen(5000);
