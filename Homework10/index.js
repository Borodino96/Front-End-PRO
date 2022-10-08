 //Найти сумму и количество положительных элементов.
 
 
 /* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 let positiveN = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result += arr[i];
    positiveN ++
  }
 }
 console.log(`${'Cумма положительных элементов: '+result}`);
 console.log(`${'Количество положительных элементов: '+positiveN}`); */



 //   Найти минимальный элемент массива и его порядковый номер.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let min = Math.min(...arr);
let position = arr.indexOf(min);
console.log(min, position);
 */



//Найти максимальный элемент массива и его порядковый номер.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let max = Math.max(...arr);
let position = arr.indexOf(max);
console.log(max, position);*/



//Определить количество отрицательных элементов. 


 /* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 let negativen = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativen++;
  }
}
console.log(negativen); */



//Найти количество нечетных положительных элементов.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    result++;
  }
}
console.log(result); */



//Найти количество четных положительных элементов.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 == 0) {
    result++;
  }
}
console.log(result);
 */


//Найти сумму четных положительных элементов.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 == 0) {
    result += arr[i];
  }
}
console.log(result); */



//Найти сумму нечетных положительных элементов.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    result += arr[i];
  }
}
console.log(result); */



//Найти произведение положительных элементов.


/* let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
 let result = 1;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result *= arr[i];
  }
}
console.log(result); */


//Найти наибольший среди элементов массива, остальные обнулить.


let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
/* let max = Math.max(...arr);
let result = arr.map(function (maxValue) {
  if (maxValue == max) {
    return maxValue;
  } else {
    return 0;
  }
  })
  console.log(result) */
  // let result = arr.map(v => v == max ? v : 0);


let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    arr[maxi] = 0;
    maxi = i;
  } else {
    arr[i] = 0;
  }
}
console.log(arr);