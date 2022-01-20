fetch("https://rickandmortyapi.com/api/character", {
  method: "GET",
})
  .then((response) => response.json())
  .then(function (json) {
    var container = document.querySelector(".container");

    console.log(json);
    json.results.map(function (results) {
      container.innerHTML +=
        `<div class="card">
                  <img class="cardImage" src=` + results.image +`>
                  <h2 class="cardName"">` + results.name + `</h2>
                 <p class="cardSpecie">Specie:` +results.species + `</p>
                </div>     
            </hr>
            `;
    });
  });
