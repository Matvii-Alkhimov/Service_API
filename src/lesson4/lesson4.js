// const BASE_URL = 'http://localhost:3000';

// async function getAllMovies() {
//     try{
//         const movies = await fetch(`${BASE_URL}/movies`)
//         const parsedMovies = await movies.json();
//         return parsedMovies
//     } catch(error) {

//     }
// }

// async function getMovieById(id) {
//     try{
//         const movie = await fetch(`${BASE_URL}/movies/${id}`)
//         const parsedMovie = await movie.json();
//         return parsedMovie
//     } catch(error) {

//     }
// }

// // getAllMovies();
// // getMovieById(3);

// const newMovie = {
//     title: "JS",
//     director: "Me",
//     genres: [
//         "Drama",
//         "Tragedy"
//     ],
//     rating: 10
// }

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newMovie)
// }

// async function createMovie() {
//     try {
//         const updatedMovie = await fetch(`${BASE_URL}/movies/`, options);
//         const parsedMovie = await updatedMovie.json();
//         return parsedMovie 
//     } catch(error) {
//         console.log(error)
//     }
// }

// async function updateMovieById(bookId, update) {
//     const options = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(update)
//     }

//     try {
//         const updatedMovie = await fetch(`${BASE_URL}/movies/${bookId}`, options);
//         const parsedMovie = await updatedMovie.json();
//         return parsedMovie 
//     } catch(error) {
//         console.log(error)
//     }

    
// }

// async function deleteMovie(id) {
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify(update)
//     }
//     try {
//         const movie = await fetch(`${BASE_URL}/movies/${id}`, options);
//         const parsedMovie = await movie.json();
//         return parsedMovie 
//     } catch(error) {
//         console.log(error)
//     }
// }

// createMovie()
// updateMovieById(1, {
//     title:"D"
// })

// deleteMovie(9)






// setTimeout(()=>{
//     try {
//     console.log("a")
//     id;
//     console.log("b")
// } catch(error) {console.log("error")}
// }, 500)

// console.log("c")










//////////////////////////////////////
/////////////////////////////////////

// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

// function checkValid(obj) {
//     try {
//         return JSON.parse(obj);
//     } catch(error) {
//         console.log('бекенд повернув якусь нісенітницю')
//     }
// }

// checkValid(validJSON)
// checkValid(invalidJSON)


// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍎',
//   };

//   return new Promise((resolve)=> {
//     setTimeout(()=>{
//     console.log((fruits[name]))
//   }, 500)
//   });
// }

// function makeSmoothie() {
//     getFruit("kiwi").then(res=>{
//         console.log(res)
//         getFruit("apple").then(res=>console.log(res))
//         getFruit("strawberry").then(res=>console.log(res))
//     })
    
// }

// // makeSmoothie()


// async function makeSmoothieAsync() {
//     const kiwi = getFruit("kiwi");
//     // console.log(kiwi);
//     const apple = getFruit("apple");
//     // console.log(apple);
//     const strawberry = getFruit("strawberry");
//     // console.log(strawberry);

//     const smoothie = await Promise.all([kiwi, apple, strawberry]);

// }

// makeSmoothieAsync()

