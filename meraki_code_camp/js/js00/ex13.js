const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(side){
    let square3 = Math.sqrt(3)
	const answer= ((square3/4*(side**2)));

console.log(
  'Area of equilateral triangle = '+answer.toFixed(2)+' sq. units');
}

const num1 = prompt("Enter side of the equilateral triangle: ");
findAnswer(Number(num1));