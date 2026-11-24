let secret = 45;
  let attempts = 0;
  let guess = 0;

  while (guess !== secret) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess < secret) {
      console.log("Too small!");
    } else if (guess > secret) {
      console.log("Too big!");
    } else {
      console.log("Correct! you made " + attempts + " attempts.");
    }
