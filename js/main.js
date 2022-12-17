let elinput = document.querySelector("input");
let elForm = document.querySelector("form");
let elList = document.querySelector(".js-list");
let elSelect = document.querySelector("#js-select");

let newArr = [];

elForm.addEventListener("input", (evt) => {
  evt.preventDefault();
  elList.innerHTML = "";

  let elInputVal = elinput.value.toLocaleLowerCase();

  films.forEach((el) => {
    if (el.title.toLocaleLowerCase().includes(elInputVal)) {
      newArr.push(el);
    }
    // console.log(newArr);
  });

  hero(newArr);

  newArr = [];
});

function hero(films) {
  let newRes = "";
  for (els of films) {
    newRes += `<div class="card shadow " style="width: 18rem;">
        <img src="${els.poster}" class="card-img-top" alt="films">
        <div class="card-body">
  <h5 class="card-title text-success">${els.title}</h5>
  <h4 class="card-text text-danger">${els.genres}</h4>
  <p class="card-text">${els.overview}</p>
  </div>
  </div>`;
  }

  elList.innerHTML = newRes;
}

hero(films);

let newSet = new Set();

films.forEach((el) => {
  el.genres.forEach((type) => {
    newSet.add(type);
  });
});

newSet.forEach((type) => {
  let newOption = document.createElement("option");

  newOption.value = type;
  newOption.textContent = type;

  elSelect.appendChild(newOption);
});

let res = [];

elSelect.addEventListener("change", (element) => {
  let filterArr = films.filter((film) => {
    let all = element.target.value;
    return film.genres.includes(all);
  });
  hero(filterArr);
});
