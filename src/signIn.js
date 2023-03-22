import googleBtn from './assets/google-btn.svg';
import signUpForm from './signUpForm.js';
import { signInEmailPassword, signInGoogle } from './index.js';

const container = document.createElement('div');

export default function signIn() {
  container.className = 'sign-in-container';
  const contentContainer = document.createElement('div');
  contentContainer.className = 'sign-in-content-container';
  const pageContainer = document.createElement('div');
  pageContainer.className = 'sign-in--page-container';

  const signInPageOne = document.createElement('div');
  signInPageOne.classList.add('sign-in-page');

  const form = document.createElement('form');
  form.classList.add('sign-in--form');
  const formList = document.createElement('ul');

  const emailItem = document.createElement('li');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  emailLabel.setAttribute('for', 'email-input');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.id = 'email-input';
  emailItem.append(emailLabel, emailInput);

  const passwordItem = document.createElement('li');
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password';
  passwordLabel.setAttribute('for', 'password-input');
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.id = 'password-input';
  passwordItem.append(passwordLabel, passwordInput);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'sign-in-buttons';

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Log in';

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Cancel';

  cancelButton.addEventListener('click', () => {
    removeSignIn();
  });

  buttonContainer.append(cancelButton, submitButton);

  formList.append(emailItem, passwordItem, buttonContainer);
  form.append(formList);
  form.onsubmit = (e) => {
    e.preventDefault();
    signInEmailPassword(emailInput.value, passwordInput.value);
  };

  const createContainer = document.createElement('div');
  createContainer.className = 'sign-up-link-container';
  const createButton = document.createElement('button');
  createButton.setAttribute('type', 'button');
  createButton.className = 'sign-up-button';
  createButton.textContent = 'Create an account';
  createContainer.textContent = 'First timer?';
  createContainer.append(createButton);

  createButton.addEventListener('click', () => {
    const signUp = signUpForm(removeSignIn);

    pageContainer.appendChild(signUp);
    pageContainer.classList.add('sign-up--shift');
  });
  
  const altContainer = document.createElement('div');
  const googleButton = document.createElement('button');
  googleButton.classList.add('google-button');
  const googleButtonText = document.createElement('span');
  const googleButtonImg = new Image();
  googleButtonImg.src = googleBtn;
  googleButtonText.textContent = 'Sign in with Google';
  googleButton.append(googleButtonImg, googleButtonText);
  altContainer.append(googleButton);

  googleButton.addEventListener('click', () => {
    signInGoogle();
  })

  signInPageOne.append(form, createContainer, altContainer);
  pageContainer.append(signInPageOne);
  contentContainer.append(pageContainer);

  container.append(contentContainer);

  return container;
}

export function removeSignIn() {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.remove();
}
