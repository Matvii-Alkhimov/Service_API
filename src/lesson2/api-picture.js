

const BASE_URL = "https://pixabay.com/api/";

export class GalleryApi {
    constructor() {
        this.key1 = "";
        this.key2 = "";
        this.key3 = "";
        this.page = 1;
    }

    createGallery() {
        return fetch(`${BASE_URL}?key=39207262-6adfeb1da7a3c9c20c6715f96&per_page=20&page=${this.page}&q=${this.key1}+${this.key2}+${this.key3}`)
        .then(res=>res.json())
        .then((articles) => {
            this.increasePage();
            return articles;
        })
        .catch((error)=> alert("Limit is over"))
    }
    increasePage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
    }
}