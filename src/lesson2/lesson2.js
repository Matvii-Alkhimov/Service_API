import galleryItemTpl from "../templates/gallery.handlebars";
import { GalleryApi } from "./api-picture";

const elements = {
    formEl: document.querySelector(".form"),
    findBtnEl: document.querySelector(".find-button"),
    galleryEl: document.querySelector(".gallery"),
    loadMoreBtn: document.querySelector(".load-more-button"),
    resetBtn: document.querySelector(".reset-button"),
    // backdropEl: document.querySelector(".backdrop"),
    // modalEl: document.querySelector(".modal"),
}

const galleryApi = new GalleryApi();

elements.formEl.addEventListener("submit", onButtonFormClick)
elements.loadMoreBtn.addEventListener("click", onLoadMoreBtnClick);
elements.resetBtn.addEventListener("click", onResetBtnClick);

function onButtonFormClick(event) {
    event.preventDefault();
    galleryApi.resetPage();
    toggleButtonsAttribute()

    galleryApi.key1 = event.currentTarget.elements.input1.value;
    galleryApi.key2 = event.currentTarget.elements.input2.value;
    galleryApi.key3 = event.currentTarget.elements.input3.value;

    galleryApi.createGallery().then((array)=> {
        createGalleryFunction(array)
    } )
}

function onLoadMoreBtnClick() {
    galleryApi.increasePage();

    galleryApi.createGallery().then((array)=> {
        createGalleryFunction(array)
    } )
}

function createGalleryFunction(array) {
    const markup = galleryItemTpl(array);
    elements.galleryEl.insertAdjacentHTML('beforeend', markup);
}

function onResetBtnClick() {
    elements.galleryEl.innerHTML = ``;
    elements.formEl.reset();
    toggleButtonsAttribute();
}

function toggleButtonsAttribute() {
    elements.findBtnEl.toggleAttribute("disabled");
    elements.loadMoreBtn.toggleAttribute("disabled");
}

// elements.galleryEl.addEventListener("click", onPictureInfoBtnClick)

// function onPictureInfoBtnClick(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return
//     }

//     elements.backdropEl.classList.remove("is-hidden")

// }

// fetch('https://pixabay.com/api/?key=39207262-6adfeb1da7a3c9c20c6715f96&id=736885')
// .then((img)=> img.json())
// .then((res)=> console.log(res))