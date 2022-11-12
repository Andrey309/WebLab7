var str = "Hello";
console.log(str)

var Num1 = 3;
var Num2 = 4;
console.log(Num1, Num2)

var Sum = Num1 + Num2;
console.log(Sum)

var Diff = Num1 - Num2;
console.log(Diff)

var Mult = Num1 * Num2;
console.log(Mult)

var Dif = Num1 / Num2;
console.log(Dif)

var Pow = Math.pow(Num1, 2);
console.log(Pow)

var Rem = Num1 % Num2;
console.log(Rem)

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Вывод приветсвия через функцию
let userName = 'Вася';
 
function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}
showMessage();

// Замена символов "l" на "L"
console.log(str.replace(/l/g, "L"));