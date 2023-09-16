// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then((success) => success.json())
// .then((pokemon) => console.log(pokemon))
import pocemonTpl from '../templates/pocemon.handlebars';

const elements = {
    pocemonsContEl: document.querySelector(".js-card-container"),
    cardListEl: document.querySelector(".card-list"),
    formEl: document.querySelector(".js-search-form"),
}

function createCardFunction(num) {
    const item = document.createElement("li");
    item.classList.add(".card-item")

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((result) => result.json())
    .then((pocemon) => {
    const markup = pocemonTpl(pocemon)
    item.innerHTML = markup;
    elements.cardListEl.append(item)
})
} 

elements.formEl.addEventListener("submit", onFormClick);

function onFormClick(event) {
    event.preventDefault();
    const id = event.currentTarget.elements.query.value;
    createCardFunction(id);
}

// for (let i = 1; i < 100; i += 1) {
//     createCardFunction(i);
// }