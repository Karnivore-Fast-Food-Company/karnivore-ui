// login
var number = document.getElementById("login_number");
var password = document.getElementById("login_password");
var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateLogin();
});

const validateLogin = () => {
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();

  // for number
  if (numberValue === "") {
    setErrorFor(number, "Please input your phone number");
  } else {
    setSuccess(number);
  }
  // for password
  if (passwordValue.length < 6) {
    setErrorFor(password, "Password cannot be less than 6 characters");
  } else {
    setSuccess(password);
  }
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
};
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerHTML = message;

  formControl.classList.add("error");
};
