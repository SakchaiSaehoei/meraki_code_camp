const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(c){
	console.log('Temperature in Fahrenheit = ' + ((c*9/5)+32).toFixed(2) + " F");
}

const num1 = prompt("Enter temperature in Celsius : ");
findAnswer(Number(num1));