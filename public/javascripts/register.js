'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $("#registration-form").submit(processRegistration);

  function processRegistration(e) {
    e.preventDefault();
    console.log('hello!!!');
    window.location.replace("http://svangel.com");
  }
}