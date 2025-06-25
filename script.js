const select = document.getElementById('breed-select');
const button = document.querySelector('button');
const box = document.querySelector('.box');

// 1. On va chercher les races
fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => {
    for (let breed in data.message) {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      select.appendChild(option);
    }
  });

// 2. Quand on clique, on affiche un chien
button.addEventListener('click', () => {
  const breed = select.value;
  let url;

  if (breed === "") {
    url = 'https://dog.ceo/api/breeds/image/random';
  } else {
    url = `https://dog.ceo/api/breed/${breed}/images/random`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      box.innerHTML = `<img src="${data.message}" alt="dog" style="width:100%; height:100%; object-fit:cover;">`;
    });
});










/* const button = document.querySelector('button');
const select = document.querySelector('select');
const box = document.querySelector('.box');

button.addEventListener('click', () => {
    let breed = select.value;
    let url;

    if(breed === "") {
        url = 'https://dog.ceo/api/breeds/image/random';
    } else {
        url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        box.innerHTML = `<img src="${data.message}" style="width: 100%; height: 100%; object-fit: cover; alt="Dog Image">`;
    })
}) */