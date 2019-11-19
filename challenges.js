let scores, roundScore, activeayer, dice, gamePlaying,lastDice;

init();

// document.querySelector('#current-'+ activePlayer).textContent = dice;
// permet de rajouter du code html ici mettre en italique 
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice +'</em>' 

// permet de modifier le css ici ne plus afficher l'image
//document.querySelector('.dice').style.display = 'none'; 



// quand je click sur le bouton roll
document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        //1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if(dice === 6 && lastDice == 6){
            scores[activePlayer]=  0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1) {
            //Add score 
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();

        }
                
        lastDice = dice;
    }
});


// quand je click sur le bouton hold
document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // Add CURRENT score to global score
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector('.final-score').value;
        let winningScore;

        if(input){
            winningScore = input;

        }else{
            winningScore = 100;
        }
        
        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }

    }


});

function nextPlayer() {
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

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');







}