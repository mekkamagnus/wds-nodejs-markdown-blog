// Create server
const express = require("express");
// Require mongoose library
const mongoose = require("mongoose");
// Require our router
const articleRouter = require("./routes/articles.js");
// Get app variable
const app = express();

// Render out html
// Pages are created and managed through routes and a mongodb database

// Connect to mongo database
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set view engine to ejs
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

// Create route for index
app.get("/", (req, res) => {
  // Render out index.ejs

  // Array data
  const articles = [
    {
      title: "Test Article One",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article Two",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];

  // Pass text JavaScript variable from Node.js to index.ejs
  res.render("articles/index", { articles: articles });
});

// Create route
app.listen(5000);
