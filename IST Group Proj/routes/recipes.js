var express = require('express');
var router = express.Router();

router.post("/recipes",function(req, res, next){
  res.send("RECIPE API");
});

module.exports = router;
