async function fetchCount(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.count;
}

async function getPlanets() {
  const list = document.getElementById("planet-list");


  for (let i = 1; i <= 61; i++) {
    const response = await fetch(`https://swapi.py4e.com/api/planets/${i}/`);
    const data = await response.json();

    const item = document.createElement("li");
    item.innerHTML = `<span>${data.name}</span><span>${data.terrain}</span>`;
    list.appendChild(item);



    item.addEventListener("click", () => {
      document.querySelector(".planets-right p").innerHTML = `Polulation : <strong>${data.population}</strong>`
     
      const strongs = document.querySelectorAll(
        ".planet-item .planet-text strong"
      );

      
      strongs[0].textContent = data.diameter + " km";
      strongs[1].textContent = data.climate;
      strongs[2].textContent = data.gravity;
      strongs[3].textContent = data.terrain;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getPlanets();
});
