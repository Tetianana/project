"use strict";

// 18. Практика, ч.1. Начинаем создавать приложение
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// 1️⃣ Запитуємо у користувача, скільки фільмів він уже подивився
// "+" перед prompt перетворює відповідь (рядок) у число
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 2️⃣ Створюємо об'єкт personalMovieDB, в якому зберігатимемо інформацію про фільми
const personalMovieDB = {
    count: numberOfFilms, // записуємо відповідь користувача в поле count
    movies: {},            // сюди пізніше запишемо інформацію про переглянуті фільми
    actors: {},            // поки порожній об'єкт для майбутніх акторів
    genres: [],            // порожній масив для жанрів
    privat: false          // вказуємо, що база даних не приватна
};

// 3️⃣ Двічі запитуємо назви останніх фільмів та їх оцінки
// Кожна пара "питання-відповідь" зберігається в окремі змінні
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

// 4️⃣ Заносимо отримані дані у властивість movies об'єкта personalMovieDB
// Фільм виступає як ключ (назва), а оцінка — як значення
// Заносимо перший фільм та його оцінку у властивість "movies" нашого об'єкта
// ❗️ Змінна a містить назву фільму (наприклад, "Titanic")
// ❗️ Змінна b містить оцінку (наприклад, "9")
// ⬇️ Таким чином ми створюємо запис: movies["Titanic"] = "9"
// personalMovieDB.movies krapka tut bo my zvertajemos do obj personalMovieDB, a moviesce vkladennia do jakogo my zwertajemos

personalMovieDB.movies[a] = b;

// Те саме робимо для другого фільму
// ❗️ Змінна c — ще одна назва фільму (наприклад, "Avatar")
// ❗️ Змінна d — оцінка для цього фільму (наприклад, "8.5")
// ⬇️ Тобто записуємо: movies["Avatar"] = "8.5"
personalMovieDB.movies[c] = d;

// 5️⃣ Виводимо весь об'єкт personalMovieDB у консоль
// Можна подивитися, що саме збереглося
console.log(personalMovieDB);

// 14. Операторы в JS

// console.log('arr' + "- object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8);
// console.log(2*4 == '8');
// console.log(2*4 === 8);

// &&
// ||

// const isChecked = true,
//       isClose = true;
// console.log(isChecked && isClose);


// const isChecked = true,
//       isClose = false;
// console.log(isChecked || isClose);

// const isChecked = false,
//       isClose = false;
// console.log(isChecked || isClose);

// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose);







// 13. Интерполяция (ES6)
// const category = 'toys';
// console.log(`https://someurl.com/'${category}/5`);

// const user = "Tasia";
// alert (`Hello, ${user}`);

// 12. Простое общение с пользователем
// alert('Hello');
// const result = confirm('Are you here?');
// console.log(result); 
//  const answer = prompt("Вам є 18?", "18");
//  console.log(answer+5);

// const answers = [];
// // answers[0] = prompt ('What is your name?', '');
// // answers[1] = prompt ('What is your surname?', '');
// // answers[2] = prompt ('How old are you?', '');

// console.log(typeof(null));

// // // 10.Klasyfikacja typiv da nnyh v JS

// // // let number= 4.6;

// // // console.log(-4/0);

// // // console.log('string' * 9);

// // // const persone = 'Alex';

// // const bool = false;

// // console.log(something);

// // let und;
// // console.log(und);

// // const obj = {
// //      name: "John",
// //      age: 25,
// //      isMarried: false
// // };
// // console.log(obj.name);

// // let arr = ['plum.png', 'orange.jpg', 'apple.bmp', {}, []]
// // console.log(arr[1]);


// // 11. (д) Разница между объектами и массивами и неочевидные синтаксические возможности
// const arr = ['a', 'b', 'c'];

// arr [10] = '3456';
// console.log(arr[10]);
// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
        
//     }

// }
// const b = 'b';
// // arrObj.b = '1234';
// arrObj[b] = '1234';
// console.log(arrObj['b']);
// console.log(arrObj.b);






// const obj = {
//     Anna: 500,
//     'Alice' = 800
// }
// lesson 6
// // let number = 5;
// // const leftBorderWidth = 1;

// // number = 10;
// // console.log(number);

// // const obj = {
// //     a: 50
// // };

// // obj.a = 10;

// // console. log (obj);
  

