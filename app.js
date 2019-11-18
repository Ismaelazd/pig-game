
let scores, roundScores, activeayer,dice;

scores = [0,0];
roundScores = 0 ;
activePlayer = 0;

dice = Math.floor(Math.random()*6)+1;
console.log(dice);

document.querySelector('#current-'+ activePlayer).textContent = dice;
