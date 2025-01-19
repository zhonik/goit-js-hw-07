const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const objLoginForm = {};

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    objLoginForm.email = event.target.elements.email.value;
    objLoginForm.password = event.target.elements.password.value;
  }
  loginForm.reset();
});
