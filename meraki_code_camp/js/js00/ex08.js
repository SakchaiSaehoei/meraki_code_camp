const prompt = require("prompt-sync")({ sigint: true });

function convert(d){
    year =  Math.floor(d/365);
    week = Math.floor((d%365)/7 );
    day = Math.floor(((d%365)%7));
	console.log('365 days = '+ year +' year/s, '+ week+' week/s and '+ day +' day/s');
}

const num1 = prompt("Enter days ");
convert(Number(num1));          