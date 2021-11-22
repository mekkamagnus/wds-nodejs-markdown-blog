const express = require("express");
const router = express.Router();
// Put all the routes directly related to our article

// Show
router.get("/", (req, res) => {
  res.send("In articles");
});

// edit

module.exports = router;
