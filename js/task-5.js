function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  body.querySelector('.color').textContent = body.style.backgroundColor;
});
