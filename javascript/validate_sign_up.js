// signUp
const number = document.getElementById('sign_up_number');
const username = document.getElementById('sign_up_username');
const email = document.getElementById('sign_up_email');
const password = document.getElementById('sign_up_password');
const confirmPassword = document.getElementById('confirm_password');
const signUpForm = document.getElementById('sign-up-form');

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
};
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerHTML = message;
  formControl.classList.add('error');
};

const validateSignUp = () => {
  const numberValue = number.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  //   Validate nnumber
  if (numberValue === '') {
    setErrorFor(number, 'Please input your phone number');
  } else {
    setSuccess(number);
  }
  // validate username
  if (usernameValue === '') {
    setErrorFor(username, 'Please input your username');
  } else {
    setSuccess(username);
  }

  // validate email
  if (emailValue === '') {
    setErrorFor(email, 'Please input your email');
  } else {
    setSuccess(email);
  }

  // validate username
  if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, 'Your passwords donot match');
  } else {
    setSuccess(confirmPassword);
  }
  // for password
  if (passwordValue.length < 6) {
    setErrorFor(password, 'Password cannot be less than 6 characters');
  } else {
    setSuccess(password);
  }
};

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateSignUp();
});
