let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const message = document.getElementById('message');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.innerText = "Please enter a number between 1 and 100.";
    } else {
        attempts++;
        if (guess === randomNumber) {
            message.innerText = `🎉 Congratulations! You guessed it right in ${attempts} attempts!`;
            message.classList.add("text-success", "correct-guess");
            guessInput.classList.remove("shake-animation");
        } else if (guess < randomNumber) {
            message.innerText = "🔼 Too low! Try a higher number.";
            message.classList.remove("text-success", "correct-guess");
            guessInput.classList.add("shake-animation");
        } else {
            message.innerText = "🔽 Too high! Try a lower number.";
            message.classList.remove("text-success", "correct-guess");
            guessInput.classList.add("shake-animation");
        }
    }
    guessInput.value = '';
    setTimeout(() => guessInput.classList.remove("shake-animation"), 500);
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('message').classList.remove("text-success", "correct-guess");
    document.getElementById('guessInput').value = '';
}
