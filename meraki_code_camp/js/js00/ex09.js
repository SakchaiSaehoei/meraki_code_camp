const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(base, exponent){
	console.log(base +' ^ '+ exponent + ' = ' + (base**exponent));
}

const num1 = prompt("Enter base : ");
const num2 = prompt("Enter exponent : ");
findAnswer(Number(num1),Number(num2));