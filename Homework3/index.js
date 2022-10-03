let operation = prompt ('введите в строку какую операцию желаете выполнить: add(+)/sub(-)/mult(*)/div(/)?', '');
let x = +prompt ('введите первое число', '');
let y  = +prompt ('введите второе число', '');
if (operation == 'add') {
    let result = x+y;
    alert(`${x}+${y} = ${result}`)}
else if (operation == 'sub') {
    let result = x-y;
    alert(`${x}-${y} = ${result}`)
}
else if (operation == 'mult') {
    let result = x*y;
    alert(`${x}*${y} = ${result}`)
}
else if (operation == 'div') {
    let result = x/y;
    alert(`${x}/${y} = ${result}`)
}
else {
    alert ('укажите какую операцию вы хотите выполнить')}





