const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', event => {
  if (inputField.value.trim() === '') {
    return (outputField.textContent = 'Anonymous');
  }

  outputField.textContent = event.currentTarget.value;
});
