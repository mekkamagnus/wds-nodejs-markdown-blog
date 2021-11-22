const express = require("express");
const router = express.Router();
// Put all the routes directly related to our article

// Show
router.get("/new", (req, res) => {
  res.render("articles/new");
});

// Handle POST logic from new.ejs
router.post("/", (req, res) => {});

// edit

module.exports = router;
