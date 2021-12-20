'use strict'

//пример 1

let a = 1, b = 1, c, d;

/*
1. выполняется префиксный инкремент а получаем а = 2
2. с присваивается значение 2
*/

c = ++a;

alert(c); // ответ: 2

//пример 2

/*
1. в присваивается значение b = 1
2. выполняется постфиксный инкремент b получаем b = 2
*/
d = b++;

alert(d); //ответ: 1

//пример 3

/*
1. выполняется префиксный инкремент а получаем а = 3
2. выполняется сложение 2 и а получаем 5
3. присваиваем в с значение 5
*/
c = 2 + ++a;

alert(c); //ответ: 5

//пример 4

/*
1. выполняется сложение 2 и b получаем 4 
2. выполняется постфиксный инкремент b получаем b = 3
3. присваиваем в d значение 4
*/
d = 2 + b++;

alert(d); //ответ: 4

alert(a); //3

alert(b); //3

//Упражнение 2 

a = 2;

/*
1. выполняется умножение а на 2 получаем 4
2. выполняется сложение 1 и 4 получаем 5
3. выполняется присваивание x значение 5
*/
let x = 1 + (a *= 2);

console.log(x);

//Упражнение 3
a = 3;
b = 2;

if (a > 0 && b > 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else if ((a * b) < 0) {
    console.log(a + b);
}

//Упражнение 4
function Add(num1, num2) {
    return num1 + num2;
}

function Sub(num1, num2) {
    return num1 - num2;
}

function Mult(num1, num2) {
    return num1 * num2;
}

function Div(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
    else {
        alert('На 0 делить нельзя')
    }
}

//Упражнение 5

function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case "add": {
            console.log(Add(arg1, arg2));
            break;
        }
        case "sub": {
            console.log(Sub(arg1, arg2));
            break;
        }
        case "div": {
            console.log(Div(arg1, arg2));
            break;
        }
        case "mult": {
            console.log(Mult(arg1, arg2));
            break;
        }
        default: {
            alert("Действия '" + operation + "' нет")
        }
    }
}
console.log("Add");
mathOperation(2, 3, "Add");

console.log("Sub");
mathOperation(2, 3, "Sub");

console.log("Div");
mathOperation(2, 3, "Div");

console.log("Mult");
mathOperation(2, 3, "Mult");

console.log("Plus");
mathOperation(2, 3, "Plus");

