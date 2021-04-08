const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const PersonalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 1; i <= 2; i++){
   const a = prompt("Какой фильм вы хотите оценить?", ""),
         b = prompt("Какую оценку вы хотите дать этому фильму?", "");

   if (a != null && b != null && a != '' && b != '' && a.length < 50){
      PersonalMovieDB.movies[a] = b;
      console.log("done!");
   } else {
      console.log("Error");
      i--;
   }     
}

if (PersonalMovieDB.count < 10) {
   alert("Просмотрено слишком мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
   alert("Вы классический зритель");
} else if(PersonalMovieDB.count >= 30){
   alert("Да вы прям киноман!");
} else{
   alert("Error");
}

console.log(PersonalMovieDB);
