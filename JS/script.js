/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
   }
}

start();

const PersonalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 1; i <= 2; i++){
      const a = prompt("Какой фильм вы хотите оценить?", ""),
            b = prompt("Какую оценку вы хотите дать этому фильму?", "");
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50){
         PersonalMovieDB.movies[a] = b;
      } else {
         i--;
      }     
   }
}

rememberMyFilms();

function DetectPersonalLevel() {
   if (PersonalMovieDB.count < 10) {
      alert("Просмотрено слишком мало фильмов");
   } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
      alert("Вы классический зритель");
   } else if(PersonalMovieDB.count >= 30){
      alert("Да вы прям киноман!");
   } else{
      alert("Error");
   }
}

DetectPersonalLevel();




// Код возьмите из предыдущего домашнего задания

function showMyDB(hidden){
   if (!hidden){
      console.log(PersonalMovieDB);
   }
}

showMyDB(PersonalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      PersonalMovieDB.genres[i - 1] = genre;
   }
}

writeYourGenres();