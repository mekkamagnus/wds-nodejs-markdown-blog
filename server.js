// Create server
const express = require("express");
// Get app variable
const app = express();

// Print out html

// Set view engine to ejs
app.set("view engine", "ejs");

// Create route at index
app.get("/", (req, res) => {
  // Render out index.ejs
  res.render("index");
});

// Create route
app.listen(5000);
