const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(a1, a2){
	console.log('Third angle = '+ (180-a1-a2));
}

const num1 = prompt("Enter first angle: ");
const num2 = prompt("Enter second angle: ");
findAnswer(Number(num1),Number(num2));