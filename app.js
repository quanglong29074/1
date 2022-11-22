const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('confrim-password');

const from = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3;
       max = 25;

      const ussername = usernameEl.value.trim();
      
      if (!isRequired(username)) {
          showError(usernameEl, 'Username cannot be blank.');
      } else if (!isBetween(username.length, min, max)) {
        showError(username, 'Username nust be between ${min} and ${max} characters.')
      } else {
        showSuccess(usernameEl);
        valid = true;
      }
      return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl,'Email is not vaid.')
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
};

const checkPassword = ()=> {
  let valid = false;


  const password = passwordEl.avalue.trim();

  if (!isRequired(password)) {
    showError(passwordEl, 'password cannot be blank.');
  }else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'password must has at least 8 characters that inclue at least 1 lowercase'+
    'character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkConfirmPassword = ()=> {
  let valid = false;
  //check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'please enter the password again');
  }else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'The password dose not math');
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => {
  //regular expression (check email)
  //https://developer.mozzila.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Regexp
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  //regular expression (check password)
  const re = new RegExp("^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

const isRequired = value => value == '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, messge) => {
  //get the from-lield element
  const fromField = input.patentElement;
  //add the error class
  fromField.classList.remove('success');
  fromField.classList.add('error');

  //show the error message
  const error = fromField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the fro,-field element
  const fromField = input.parentElement;

  //remove the error class
  fromField.classList.remove('success');
  fromField.classList.add('error');

  //hide the error message
  const error = fromField.querySelector('smaill');
  error.textContent = '';
}