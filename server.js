// Create server
const express = require("express");
// Require our router
const articleRouter = require("./routes/articles.js");
// Get app variable
const app = express();

// Print out html

// Set view engine to ejs
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

// Create route at index
app.get("/", (req, res) => {
  // Render out index.ejs
  res.render("index");
});

// Create route
app.listen(5000);
