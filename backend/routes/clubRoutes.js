const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Club route working");
});

module.exports = router;
