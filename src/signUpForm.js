import { signUpEmailPassword } from '.';

export default function signIn(close) {
  const form = document.createElement('form');
  form.classList.add('sign-in-page');

  const formList = document.createElement('ul');

  const emailItem = document.createElement('li');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  emailLabel.setAttribute('for', 'sign-up--email-input');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.id = 'sign-up--email-input';
  emailInput.setAttribute('required', 'true');
  emailItem.append(emailLabel, emailInput);

  const passwordItem = document.createElement('li');
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password';
  passwordLabel.setAttribute('for', 'sign-up--password-input');
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('required', 'true');
  passwordInput.id = 'sign-up--password-input';
  passwordItem.append(passwordLabel, passwordInput);

  const confirmPasswordItem = document.createElement('li');
  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.textContent = 'Confirm Password';
  confirmPasswordLabel.setAttribute('for', 'sign-up--confirm-password-input');
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.setAttribute('type', 'password');
  confirmPasswordInput.setAttribute('required', 'true');
  confirmPasswordInput.id = 'sign-up--confirm-password-input';
  confirmPasswordItem.append(confirmPasswordLabel, confirmPasswordInput);

  confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordItem.className = `confirm-password ${confirmPasswordInput.value === passwordInput.value ? '' : 'password-error'}`
  })

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'sign-in-buttons';

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Create Account';

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Cancel';

  cancelButton.addEventListener('click', () => {
    close();
  });

  buttonContainer.append(cancelButton, submitButton);

  formList.append(
    emailItem,
    passwordItem,
    confirmPasswordItem,
    buttonContainer
  );
  form.append(formList);
  form.onsubmit = (e) => {
    e.preventDefault();
    if (passwordInput.value !== confirmPasswordInput.value) {
      return
    }
    signUpEmailPassword(emailInput.value, passwordInput.value)
  };

  return form;
}
