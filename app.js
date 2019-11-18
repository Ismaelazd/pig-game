
let scores, roundScore, activeayer,dice;

scores = [0,0];
roundScore = 0 ;
activePlayer = 0;


// document.querySelector('#current-'+ activePlayer).textContent = dice;
// permet de rajouter du code html ici mettre en italique 
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice +'</em>' 

// permet de modifier le css ici ne plus afficher l'image
document.querySelector('.dice').style.display = 'none'; 

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

// quand je click sur le bouton roll
document.querySelector('.btn-roll').addEventListener('click', function(){

    //1. Random number
    dice = Math.floor(Math.random()*6)+1;

    //2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1){
        //Add score 
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }else{
        
        nextPlayer();

    }
} )


// quand je click sur le bouton hold
document.querySelector('.btn-roll').addEventListener('click', function(){

    // Add CURRENT score to global score
    scores[activePlayer] += roundScore;

    // Update UI
    document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

    // Check if the player won the game
    if(scores[activePlayer] >= 100){
        document.querySelector('#name'+activePlayer).textContent = 'Winner !';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

    }else{
        nextPlayer();
    }
    
   
})

function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0; 

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // remove the active class from the player 1
    //document.querySelector('.player-0-pannel').classList.remove('active');
    // ADD the active class to the player 2
    //document.querySelector('.player-1-pannel').classList.add('active');
    
    // permet de rajouter une classe si elle existe pas ou de la supprimer si elle existe 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // permet de modifier le css ici ne plus afficher l'image
    document.querySelector('.dice').style.display = 'none'; 
}