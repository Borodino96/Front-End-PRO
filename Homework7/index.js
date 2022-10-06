//-Вывести на страницу в одну строку через запятую числа от 10 до 20

/* let str = '';
let i = 10;
while (i <= 20) {
    str += `,${i}` ;
    i++;
}
console.log( str.substring(1));
 */



//-Вывести квадраты чисел от 10 до 20

/*  let str = '';
let i = 10;
while (i <=20) {
    str += `,${Math.pow(i,2)}` ;
    i++;
}
console.log( str.substring(1));*/



//-Вывести таблицу умножения на 7

/* let num = 7;
let i = 0;
let str = '';
while (i<10) {
    i++;
    let result = num*i;
    str += `; ${num}${'*'}${i}${'='}${result}`;  
    console.log(num+'*'+i+'='+result+';');
}
console.log(str.substring(1)); */



//-Найти сумму всех целых чисел от 1 до 15

/* let i = 0;
let result = 0;
while (i<15) {
    i++;
    if(Number.isInteger(i)) {
        result += i;
    }
}
console.log(result) */



//-Найти произведение всех целых чисел от 15 до 35

/* let i = 15;
let result = 1;
while (i<35) {
    i++;
    if(Number.isInteger(i)) {
        result *= i;
    }
}
console.log(result); */



//-Найти среднее арифметическое всех целых чисел от 1 до 500

/* let i = 1;
let result = 0;
while (i<500) {
    i++;
    if(Number.isInteger(i)) {
        result  +=i/500;
        result = Math.round(250.498*10)/10
    }
}
console.log(result); */



//-Вывести сумму только четных чисел в диапазоне от 30 до 80

/* let i = 30;
let str = ''
while (i<80) { 
        i++;
        if (i % 2 == 0) {
        console.log(i);
        str += `; ${i}`;
    }
}
console.log(str.substring(1)); */



//-Вывести все числа в диапазоне от 100 до 200 кратные 3

/* let i = 100;
while (i<200) {
    i++;
    if (i % 3 == 0) {
        console.log(i)
    }
} */



//-Дано натуральное число. Найти и вывести на страницу все его делители.

/* let n = +prompt('Введите число');
for (let i = 1; i<= n; i++) {
    if (n % i == 0) {
        console.log(`Делители этого числа: ${i}`);
    }
} */



//-Определить количество его четных делителей

/* let n = +prompt('Введите число');
let i = 0;
let sum = 0;
while (i<=n) {
    i=i+2;
    if (n % i == 0) {
      sum += 1;  
     }
}
console.log(sum) */



//-Найти сумму его четных делителей

/* let n = +prompt('Введите число');
let i = 0;
let sum = 0;
while (i<=n) {
    i = i+2;
    if (n % i == 0) {
        sum += i;
    } 
}
console.log(sum)     */



//-Напечатать полную таблицу умножения от 1 до 10

let result;
let str = '';
for (let i = 1; i<=10; i++){
    for (let j = 1; j<=10; j++){
        result = i*j;
        console.log(i +'*'+ j + '=' + result)
        str += `; ${i}*${j}=${result}`
    }
}
console.log(str.substring(1));