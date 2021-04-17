const squere = document.createElement('div');
document.body.appendChild(squere);
squere.classList.add('cube');

let grow = true;

const step = 35;

let size = 1; // wielkość kwadratu
squere.style.width = `${size}px`;
squere.style.height = `${size}px`;

const maxWidth = parseFloat(window.innerWidth / 2);
const maxHeight = parseFloat(window.innerHeight / 2);

// Max-size
console.log(`Połowa szerokość rozdzielczości ekranu to: ${maxWidth}`);
console.log(`Połowa wysokośći rozdzielczości ekranu to: ${maxHeight}`);

window.addEventListener('scroll', () => {
  if (grow) {
    size += step;
    squere.style.width = `${size}px`;
    squere.style.height = `${size}px`;
  } else {
    size -= step;
    squere.style.width = `${size}px`;
    squere.style.height = `${size}px`;
  }

  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size <= 0) {
    grow = !grow;
  }
});
