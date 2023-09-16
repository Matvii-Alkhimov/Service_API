
import { NewsApi } from "./api-service";
import articlesTpl from "../templates/lesson3.handlebars";
import array from "./arr.json";
console.log(array)

const elements = {
    formEl: document.querySelector(".js-search-form"),
    loadMoreButtonEl: document.querySelector("[data-action='load-more']"),
    articlesContainerRef: document.querySelector(".articles"),

}

const newsApiService = new NewsApi()

elements.formEl.addEventListener("submit", onFormButtonClick);

function onFormButtonClick(event) {
    event.preventDefault();

    newsApiService.resetPage();
    newsApiService.key = event.currentTarget.elements.query.value;

    event.currentTarget.elements.query.value = "";
    newsApiService.getArticlesFunction()
    .then((articles) => console.log(articles))
}

elements.loadMoreButtonEl.addEventListener("click", onLoadMoreButtonClick);

function onLoadMoreButtonClick() {

    newsApiService.getArticlesFunction()
    .then((articles) => createMarkup(articles))
}

function createMarkup(articles) {  
    const markup = articlesTpl(articles)
    elements.articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
}

createMarkup(array.articles)