const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(n){
	console.log('Square root of '+ n + ' = ' + Math.sqrt(n).toFixed(3));
}

const num1 = prompt("Enter any number : ");
findAnswer(Number(num1));