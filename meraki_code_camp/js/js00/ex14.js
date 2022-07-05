const prompt = require("prompt-sync")({ sigint: true });

function findAnswer(s1,s2,s3,s4,s5){
    let total = s1+s2+s3+s4+s5;
    let average = total / 5;
    let percentage = total *100/500 
    console.log('Total = '+total);
    console.log('Average = '+average);
    console.log('Percentage = '+percentage.toFixed(2));
}

const num1 = prompt("Enter marks of five subjects: ");
const num2 = prompt("");
const num3 = prompt("");
const num4 = prompt("");
const num5 = prompt("");
findAnswer(Number(num1),Number(num2),Number(num3),Number(num4),Number(num5));