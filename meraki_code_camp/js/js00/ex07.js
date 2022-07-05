const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(f){
	console.log('Temperature in Celsius = ' + ((f-32)/1.8).toFixed(2) + " F");
}

const num1 = prompt("Enter temperature in Fahrenheit  : ");
findAnswer(Number(num1));