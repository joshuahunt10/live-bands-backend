const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
  res.json({
    response: "This is working"
  })
})

module.exports = router;
