// Создать массив, длину и элементы которого задаёт пользователь.


/* let array = [];
let arrayLength = +prompt("Задайте длину массива");
for (let i = 0; i < arrayLength; i++) {
  let x = prompt("Введите значение элемента");
  array.push(x);
  
}
console.log(array); */



// Отсортировать массив по возрастанию.


/* let array = [];
let arrayLength = +prompt("Задайте длину массива");
for (let i = 0; i < arrayLength; i++) {
  let x = prompt("Введите значение элемента");
  array.push(x);
}
console.log(array.sort((a,b) => a-b)); */


//Удалить элементы из массива с 2 по 4 (включительно!).


let array = [];
let arrayLength = +prompt("Задайте длину массива");
for (let i = 0; i < arrayLength; i++) {
  let x = prompt("Введите значение элемента");
  array.push(x);
}
console.log(array.sort((a,b) => a-b));
array.splice(1,3);
console.log(array);