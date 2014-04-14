var express = require('express');
var router = express.Router();

/* POST confirmation page. */
router.post('/confirmation', function(req, res) {
  var postmark = require("postmark")("dc028761-82f0-471c-a6f9-16fafd8d6571");
  postmark.send({
        "From": "kneo@stanford.edu", 
        "To": "kaiyuan.neo@gmail.com", 
        "Subject": "Test", 
        "TextBody": "Test Message"
  });
  res.render('confirmation', {title: "Thank you for registering for sf.citi."});
});

module.exports = router;