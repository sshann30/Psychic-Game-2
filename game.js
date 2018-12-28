var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var initialguesses = 10;
var guessesLeft = initialguesses
var guessed = []

document.onkeyup = function (event) {

    var userGuess = event.key;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(userGuess);

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var leftText = document.getElementById("left-text");
    var guessedText = document.getElementById("guessed-text");
    // scoring system

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            alert("You Win! Good job on picking " + userGuess)
            wins++;
            guessesLeft = initialguesses;
            guessed = [];
        }
        //only alphabet
        if (event.keyCode < 65 || event.keyCode > 90) {
            alert("Invalid Entry");}
        // what happens if they run out of guesses
        else if (guessesLeft === 0) {
            alert("You lost... sorry!")
            alert(userGuess + " was the right choice")
            losses++;
            guessesLeft = initialguesses;
            guessed = [];
        }
        else {
            guessesLeft--;
            console.log(userGuess)
                guessed.push(userGuess)
    }

}
winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses remaining: " + guessesLeft;
    guessedText.textContent = "Your guesses: " + guessed;

};
