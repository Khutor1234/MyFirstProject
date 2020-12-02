let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
}

let a = prompt("Какой фильм вы смотрели последним?", ""),
    b = prompt("Как вы его оцените?", ""),
    c = prompt("Какой фильм вы смотрели последним?", ""),
    d = prompt("Как вы его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(numberOfFilms);
console.log(personalMovieDB);
console.log(personalMovieDB.movies);
console.log(personalMovieDB.count);