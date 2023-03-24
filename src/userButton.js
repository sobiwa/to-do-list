import { signOutUser } from './index.js';
import signIn from './signIn.js';

const app = document.querySelector('.app-container');

function trimEmail(email) {
  return email.split('@')[0];
}

export default function userButton(user) {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('user-button-container');

  const button = document.createElement('button');
  const buttonText = document.createElement('span');
  const accountIconImg = document.createElement('div');
  accountIconImg.className = `account-icon-img ${
    user ? '' : 'mdi mdi-account-circle-outline'
  }`;
  if (user?.photoURL) {
    const userImg = new Image();
    userImg.src = user.photoURL;
    accountIconImg.style.height = '30px';
    accountIconImg.style.width = '30px';
    accountIconImg.append(userImg);
  }
  buttonText.textContent = `${
    user ? user.displayName ?? trimEmail(user.email) : 'Log in'
  }`;

  button.append(accountIconImg, buttonText);
  button.style.cssText =
    'display: flex; align-items: center; justify-content: center; gap: 8px;';
  button.classList.add('header--login-button');

  buttonContainer.append(button);

  if (!user) {
    button.addEventListener('click', () => {
      app.append(signIn());
    });
    return buttonContainer;
  }

  const collapsible = document.createElement('div');
  const collapseList = document.createElement('ul');
  const signOut = document.createElement('li');
  const signOutButton = document.createElement('button');
  signOutButton.textContent = 'Sign Out';
  signOut.append(signOutButton);
  collapseList.append(signOut);
  collapsible.append(collapseList);
  collapsible.classList.add('user-collapse');

  buttonContainer.append(collapsible);

  buttonContainer.addEventListener('mouseenter', () => {
    collapsible.style.maxHeight = `${collapsible.scrollHeight}px`;
  });

  buttonContainer.addEventListener('mouseleave', () => {
    collapsible.style.maxHeight = '0';
  });

  signOutButton.addEventListener('click', () => {
    signOutUser();
  });

  return buttonContainer;
}
