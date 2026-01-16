document.addEventListener('DOMContentLoaded', function () {
  var loginBox = document.querySelector('.login-box');
  var signupBox = document.querySelector('.signup-box');
  var signupLink = document.querySelector('.signup-link a');
  var loginLink = document.querySelector('.login-link a');
  var backHomeLink = document.querySelector('.back-home');
  function showSignup(e) {
    if (e) e.preventDefault();
    if (loginBox) loginBox.style.display = 'none';
    if (signupBox) signupBox.style.display = 'block';
  }
  function showLogin(e) {
    if (e) e.preventDefault();
    if (signupBox) signupBox.style.display = 'none';
    if (loginBox) loginBox.style.display = 'block';
  }
  if (signupLink) signupLink.addEventListener('click', showSignup);
  if (loginLink) loginLink.addEventListener('click', showLogin);
  function goBackOrHome(e) {
    if (e) e.preventDefault();
    var home = backHomeLink && backHomeLink.getAttribute('data-home');
    var canGoBack = window.history.length > 1;
    if (canGoBack && document.referrer) {
      window.history.back();
    } else if (home) {
      window.location.href = home;
    } else {
      window.location.href = '../index.html';
    }
  }
  if (backHomeLink) backHomeLink.addEventListener('click', goBackOrHome);
});
