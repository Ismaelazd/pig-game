
let scores, roundScores, activeayer,dice;

scores = [0,0];
roundScores = 0 ;
activePlayer = 0;


// document.querySelector('#current-'+ activePlayer).textContent = dice;
// permet de rajouter du code html ici mettre en italique 
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice +'</em>' 

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';


// permet de modifier le css ici ne plus afficher l'image
document.querySelector('.dice').style.display = 'none'; 

document.querySelector('.btn-roll').addEventListener('click', function(){

    //1. Random number
    dice = Math.floor(Math.random()*6)+1;

    //2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1
} )