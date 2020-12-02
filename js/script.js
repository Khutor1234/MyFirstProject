let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};
let num = 2;

if( numberOfFilms <= 10 ){
    alert("Маловато");
}else if( numberOfFilms > 10 && numberOfFilms <= 30){
    alert("Вы класический зритель");
}else if( numberOfFilms > 30 ){
    alert("Вы настоящий киноман");
}else{
    alert("Error");
}

for( let i = 0; i < num; i++){
    let a = prompt("Какой фильм вы смотрели последним?", ""),
        b = +prompt("Как вы его оцените?", "");
    
        if( a.length < 1 || a.length > 50 ){
            i--;
        } else{
            personalMovieDB.movies[a] = b;
        }
}

console.log(personalMovieDB);
