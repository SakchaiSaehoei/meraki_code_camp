const prompt = require("prompt-sync")({ sigint: true });

function areaOfRectangle( l, w){
    ans = l * w;
	console.log('Area of rectangle = ' + ans + " sq. units");
}

const num1 = prompt("Enter length :");
const num2 = prompt("Enter width :");
areaOfRectangle(Number(num1), Number(num2));