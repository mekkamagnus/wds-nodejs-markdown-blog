// Create server
const express = require("express");
// Require mongoose library
const mongoose = require("mongoose");
// Require article model
const Article = require("./models/article");
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

// Everything for can be accessed from the form object.
app.use(express.urlencoded({ extended: false }));

// Create route for index
app.get("/", async (req, res) => {
  // Render out index.ejs

  // Pull all articles in the database
  const articles = await Article.find().sort({
    createdAt: "desc",
  });
  // Pass text JavaScript variable from Node.js to index.ejs
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

// Create route
app.listen(5000);
