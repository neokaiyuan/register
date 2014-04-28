var express = require('express');
var router = express.Router();

/* POST confirmation page. */
router.post('/confirmation', function(req, res) {
  var postmark = require("postmark")("dc028761-82f0-471c-a6f9-16fafd8d6571");
  postmark.send({
        "From": "sf.citi <kneo@stanford.edu>", 
        "To": "kaiyuan.neo@gmail.com", 
        //"To": "abram@svangel.com", 
        "Subject": "[NEW SIGNUP] New member company", 
        "TextBody": "Test Message"
  });
  console.log(req);
  res.render('confirmation', {title: "Thank you for registering for sf.citi."});
});

module.exports = router;