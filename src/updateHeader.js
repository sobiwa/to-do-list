import userButton from './userButton.js';

export default function updateHeader(user) {
  console.log(user);
  const container = document.querySelector('.header');
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const newButton = userButton(user);

  container.appendChild(newButton);
}
