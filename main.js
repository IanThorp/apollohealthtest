$(function() {
  submitLoginListener();
})

var submitLoginListener = function() {
  $('#login').on('submit', function(e) {
    e.preventDefault();
    $("#login-error").html(loginErrorHtml);
    $(".input-container").addClass("error-input");
    $(".input-label").addClass("error-label")
  })
}

var loginErrorHtml = "<p class='error-text'>* The User Name or Password you have entered is missing or incorrect.</p>"