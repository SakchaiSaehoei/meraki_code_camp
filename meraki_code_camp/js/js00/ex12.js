const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(b, h){
	const answer= (b * h) / 2;

console.log(
  'The area of the triangle = ' + answer.toFixed(2)+' sq. units');
}

const num1 = prompt("Enter base of the triangle: ");
const num2 = prompt("Enter height of the triangle: ");
findAnswer(Number(num1),Number(num2));