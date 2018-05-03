const blankLine = ' | | ';
console.log("This is what a board would look like:");

for (i = 0; i < 3; i++) {
  console.log(blankLine);
}


// Guesses and Mines
const guessLine = '1| | ';
const bombLine = ' |B| ';

console.log("This is what a board with a guess and a bomb on it would look like:")

console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
