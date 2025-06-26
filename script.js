async function fetchCount(url) {
  const response = await fetch(url); 
  const data = await response.json(); 
  return data.count; 
}

async function updateStats() {
  const peopleCount = await fetchCount("https://swapi.py4e.com/api/people/");
  const starshipCount = await fetchCount("https://swapi.py4e.com/api/starships/");
  const planetCount = await fetchCount("https://swapi.py4e.com/api/planets/");

  const statElements = document.querySelectorAll(".stat-text strong");

  statElements[0].textContent = peopleCount;
  statElements[1].textContent = starshipCount;
  statElements[2].textContent = planetCount;
}



async function getPlanets() {
  const list = document.getElementById("planet-list");
  
  for (let i = 1; i <= 61; i++) {
    
    const response = await fetch(`https://swapi.py4e.com/api/planets/${i}/`);
    const data = await response.json();
    
    const item = document.createElement("li");
    item.innerHTML = `<span>${data.name}</span><span>${data.terrain}</span>`;
    list.appendChild(item);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  updateStats();
  getPlanets();
});
