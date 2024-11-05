let result = Math.floor(Math.random() * 100 + 1);
console.log(result);
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");
let guessCount = 1;
let restButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
    if(result === userGuess){
        lastResult.textContent = "Congratulation you won";
        lastResult.style.backgroundColor = 'green';
        lastResult.textContent.color = "white"
        lowOrHi.textContent = "";
        setGameOver();
    }else if(guessCount === 3){
        lastResult.textContent = "!!!GAME OVER!!!"
        lastResult.style.backgroundColor = 'red';
        lastResult.textContent.color = "white"
        lowOrHi.textContent = "";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = 'red';
        if(userGuess>result){
            lowOrHi.textContent = "Your guess was too High"
        }else{
            lowOrHi.textContent = "Your guess was too low"
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    let resetButton = document.createElement("button")
    resetButton.textContent = "Start a new Game";
    document.body.appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame(){
    location.reload();
}