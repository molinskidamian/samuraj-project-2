const btn = document.querySelector('button');
const ul = document.querySelector('ul');

let counter = 0;

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  counter = counter += 1;
  li.textContent = counter;

  if (counter % 5) {
    li.classList.add('biggest');
  }
  ul.appendChild(li);
});
