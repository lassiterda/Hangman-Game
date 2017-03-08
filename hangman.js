
var hangman = {
  wordlist:   ["scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design"],
  wins: 0,
  losses: 0,
  startGame: function() {
              hangman.word = "";
              hangman.dispArray = [];
              hangman.guessesRemaining = 12;
              hangman.lettersGuessed = [];
              hangman.pickWord();
              hangman.numBlanks = word.length;
              hangman.updateDispWord("");
              hangman.updateDOM();
              hangman.makeGuess();
            },

   pickWord: function() {
                word = hangman.wordlist[Math.floor(Math.random() * hangman.wordlist.length)]

                for (let i = 0; i < word.length; i++) {
                  hangman.dispArray[i] = "_";
                }
                console.log(word + ", " + hangman.dispArray);
                document.getElementById("displayed-word").innerHTML = hangman.dispArray;
            },

   updateDispWord: function(x) {
                    for (let i = 0; i < word.length; i ++) {
                      if (word[i] === x) {
                              hangman.dispArray[i] = x;
                              hangman.numBlanks--;
                      }
                    }
                  hangman.blanks  = "";
                 for (let i = 0; i < word.length; i++) {
                        hangman.blanks += "<li>" + hangman.dispArray[i] + "</li>";
                    }
                  },
    updateDOM: function() {
      document.getElementById('guesses-remaining').innerHTML = hangman.guessesRemaining;
      document.getElementById('letters-guessed').innerHTML = hangman.lettersGuessed;
        document.getElementById('displayed-word').innerHTML = hangman.blanks;
    },

    makeGuess: function() {
                document.onkeyup = function(event) {
                  if (event.keyCode >= 65 && event.keyCode <= 90) {
                    userGuess = event.key.toLowerCase();
                    if (hangman.lettersGuessed.indexOf(userGuess) === -1){
                      hangman.lettersGuessed.push(userGuess);
                      if (word.indexOf(userGuess) !== -1) {
                          hangman.updateDispWord(userGuess);
                      }
                      else {
                        hangman.guessesRemaining--;
                      }
                      hangman.updateDOM();
                    }
                  }
                hangman.isGameOver()
                }
              },

    isGameOver: function() {
                  if (hangman.numBlanks === 0) {
                    hangman.wins++;
                    document.getElementById('wins').innerHTML = hangman.wins;
                    alert("You Win!");
                    if (confirm("Play Again?")) {
                      hangman.startGame();
                    }
                  }
                  else if (hangman.guessesRemaining === 0) {
                    hangman.losses++;
                    document.getElementById('losses').innerHTML = hangman.losses;
                    alert("You lose...")
                      if (confirm("Play Again?")) {
                        hangman.startGame();
                      }
                  }
                }
};
