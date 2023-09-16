

const BASE_URL = "https://newsapi.org/v2/";
const options = {
    headers: {
        'X-Api-Key': "bc4b555b3d3c4f00a98571181f0595bd"
    }
}

export class NewsApi {
    constructor() {
        this.key = "";
        this.page = 1;
    }

    getArticlesFunction() {
        return fetch(`${BASE_URL}everything?q=${this.key}&pageSize=10&page=${this.page}`, options)
        .then(res=>res.json())
        .finally((articles) => {
            this.increasePage();
            return articles.articles;
        })
    }
    increasePage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
    }
}