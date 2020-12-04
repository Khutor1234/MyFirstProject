'use strict';

let genre = [];

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    toggleVisibleMyBd: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
        console.log(personalMovieDB.privat);
    },
    showMyDb: function(){
        if( personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
    wtiteYourGenres: function(){
        const num = 3;
        for( let i = 0; i < num; i++ ){
            const a = prompt(`Вaш любимый жанр номер ${i+1}?`, '');
    
            if (a != null && a != '') {
                personalMovieDB.genres[i] = a;
                genre[i] = a;
    
            } else {
                console.log('error');
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyBd();
personalMovieDB.showMyDb();
personalMovieDB.wtiteYourGenres();
