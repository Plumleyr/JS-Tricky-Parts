function guessingGame() {
  let rand = Math.floor(Math.random() * 100);
  let guesses = 0;
  let guessed = false;
  return function (guess) {
    if (isNaN(guess)) return "That's not a number";
    if (guessed) return "The game is over, you already won!";

    guesses++;

    if (rand === guess) {
      guessed = true;
      return `You win! You found ${rand} in ${guesses} guesses.`;
    } else if (guess > rand) {
      return `${guess} is too high!`;
    } else {
      return `${guess} is too low!`;
    }
  };
}

module.exports = { guessingGame };
