const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const PersonalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt("Какой фильм вы хотите оценить?", ""),
      b = prompt("Какую оценку вы хотите дать этому фильму?", ""),
      c = prompt("Какой фильм вы хотите оценить?", ""),
      d = prompt("Какую оценку вы хотите дать этому фильму?", "");

PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);