
    //Global variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesMade = [];
    // Gives a list of valid letter
    var validChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // computer chooses a random number from the array
    var computerGuess = validChoices[Math.floor(Math.random() * validChoices.length)];

   function pushTo(div, text) {
        document.getElementById(div).innerHTML = text
   }

   function reset() {
       computerGuess = validChoices[Math.floor(Math.random() * validChoices.length)];
       guessesMade = [];
       guessesLeft = 9;
       console.log(computerGuess);
       pushTo("guesses-left", " Guesses Left: "  + guessesLeft);
       pushTo("guesses-made", "Your Guesses so far:" + guessesMade);
    }



    console.log(computerGuess);
// Game

// User Makes a choice by hitting a key
document.onkeyup = function(event) {
    // Sets user guess
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    // Checks that user Guess is valid before continuing

    if (validChoices.indexOf(userGuess) >= 0 && guessesMade.indexOf(userGuess) < 0){

        guessesLeft--;
        guessesMade.push(userGuess);
        pushTo("guesses-made", "Your guesses so far: " + guessesMade.join(",  "));

        //Outlines what to do if user guess is wrong
        if (userGuess !== computerGuess) {
            // Verifies whether there are guesses left
            if (guessesLeft > 0) {
                pushTo( "main-text", "Nope, " + userGuess + " wasn't what I was thinking about. Try Again!");
                document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
            }
            //loss
            else {
                pushTo("main-text", "So sorry, I was thinking of " + computerGuess + ". Fake Psychic. Sad! If you think you can do better, pick a letter and try again.");
                losses++;
                pushTo("losses", "Losses: " + losses);
                reset();
            }
        }
        // win
        else {
            pushTo("main-text", "You mut be a little psychic after all, you figured it out I was thinking " + computerGuess + " in only " + (9 - guessesLeft) + " guesses! Let's play again! Hit a key to guess what I\'m thinking.");
            wins++;
            pushTo("wins", "Wins: " + wins);
            reset();
        }
    }
    // if user has already picked that letter
    else if (guessesMade.indexOf(userGuess) >= 0) {

        pushTo("main-text", "You already tried " + userGuess + " and it isn't any more correct now than it was before.")
    }
    // if user doesn't pick a valid letter
    else {

            pushTo("main-text", "That wasn't even a real letter. Nice Try!");

    }
};


