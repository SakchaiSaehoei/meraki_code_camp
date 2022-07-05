const prompt = require("prompt-sync")({ sigint: true });

function perimeterOfRectangle( l, w){
    ans = 2*(l+w);
	console.log('Perimeter of rectangle = ' + ans + " units");
}

const num1 = prompt("Enter length :");
const num2 = prompt("Enter width :");
perimeterOfRectangle(Number(num1), Number(num2));