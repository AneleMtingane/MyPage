let secret = Math.floor(Math.random() * 20 + 1);

console.log(secret);

let numGuess = 1;


while (numGuess > 0) {

    let answer = prompt("Please guess the secret number (1-20)");

    //Convert string guess to an integer to compare

    let guess = parseInt(answer);

    if (guess == secret) {

        numGuess = 0;
        alert("Correct Guess!");

    }

    else if (guess > secret) {

        alert("Incorrect, too high");

    }

    else if (guess < secret) {

        alert("Incorrect, too low");

    }

}
