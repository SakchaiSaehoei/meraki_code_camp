const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(p,t,r){
    let a = (r/100);
    let b = a  + 1
    let c = b ** t;
    let d = c * p;
	const answer = d;

console.log(
  'Simple Intereste = '+answer.toFixed(6));
}

const num1 = prompt("Enter principle (amount): ");
const num2 = prompt("Enter time: ");
const num3 = prompt("Enter rate: ");
findAnswer(Number(num1),Number(num2),Number(num3));