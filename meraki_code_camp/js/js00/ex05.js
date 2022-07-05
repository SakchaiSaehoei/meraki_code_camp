const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(cm){
	console.log('Length in meter = ' + cm/100 + " m");
    console.log('Length in kilometer = ' + cm/100000 + " km");
}

const num1 = prompt("Enter length in centimeter : ");
findAnswer(Number(num1));