var express = require('express');
var router = express.Router();

/* POST confirmation page. */
router.post('/confirmation', function(req, res) {
  var postmark = require("postmark")("dc028761-82f0-471c-a6f9-16fafd8d6571");
  var register_email_body = "### NEW MEMBER COMPANY ###\n"
  register_email_body += "\n-- Company Info --\n";
  register_email_body += "Company: " + req.body.company + "\n";
  register_email_body += "URL: " + req.body.company_url + "\n";
  register_email_body += "Description: " + req.body.company_description + "\n";
  register_email_body += "Zip code: " + req.body.zip_code + "\n";

  register_email_body += "\n-- Contact Info --\n";
  register_email_body += "Person: " + req.body.first_name + " " + req.body.last_name + "\n";
  register_email_body += "Email: " + req.body.email + "\n";
  //register_email_body += "Job Title: " + req.body.job_title + "\n";
  
  register_email_body += "\n-- Comments --\n";
  register_email_body += req.body.first_name + " says: \n";
  register_email_body += req.body.comments;

  postmark.send({
        "From": "sf.citi <kneo@stanford.edu>", 
        "To": "kaiyuan.neo@gmail.com", 
        "Bcc": "abram@svangel.com", 
        "Subject": "[NEW SIGNUP] " + req.body.company, 
        "TextBody": register_email_body
  });

  var thanks_email_body = "Hi " + req.body.first_name + ",\n";
  thanks_email_body += "\nThank you for signing up to become a member of sf.citi";
  thanks_email_body += " -- we appreciate your support! We're processing your ";
  thanks_email_body += "information and someone from our team will reach out to ";
  thanks_email_body += "you quickly if there are any questions.\n";
  thanks_email_body += "\nThanks,\n";
  thanks_email_body += "Jeremy"

  postmark.send({
        "From": "sf.citi <kneo@stanford.edu>", 
        "To": "kaiyuan.neo@gmail.com", 
        "Bcc": "abram@svangel.com", 
        "Subject": "Thanks from sf.citi",
        "TextBody": thanks_email_body
  });

  res.render('confirmation', {title: "Thank you for registering for sf.citi."});
});

module.exports = router