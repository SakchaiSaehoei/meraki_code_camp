const prompt = require("prompt-sync")({ sigint: true });1
function sum( n1, n2){
    sum = n1 + n2;
	console.log('Sum =' + sum);
}

const num1 = prompt("frist number :");
const num2 = prompt("second number :");
sum(Number(num1), Number(num2));