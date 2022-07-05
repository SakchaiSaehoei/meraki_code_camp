const prompt = require("prompt-sync")({ sigint: true });1
function sum( n1, n2){
    sum = n1 + n2;
	console.log('Sum = ' + sum);
}
function diffrence( n1, n2){
    ans = n1 - n2;
	console.log('Difference= ' + ans);
}
function product( n1, n2){
    ans = n1 * n2;
	console.log('Product = ' + ans);
}
function quotient( n1, n2){
    ans = n1 / n2;
	console.log('Quotient = ' + ans);
}
function modulus ( n1, n2){
    ans = n1 % n2;
	console.log('Modulus = ' + ans);
}

const num1 = prompt("frist number :");
const num2 = prompt("second number :");
sum(Number(num1), Number(num2));
diffrence(Number(num1), Number(num2));
product(Number(num1), Number(num2));
quotient(Number(num1), Number(num2));
modulus(Number(num1), Number(num2));