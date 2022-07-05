const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(r){
	console.log('Diameter = ' + r*2 + " units");
    console.log('Circumference = ' + r*2*3.14159265359 + " sq. units");
    console.log('Area = ' + 3.14159265359*(r**2) + " sq. units");
}

const num1 = prompt("Enter radius :");
findAnswer(Number(num1));