var startBtn = document.querySelector(".startBtn");
var wordHangman = document.querySelector(".wordHangman")
var wins = document.querySelector(".wins");
var losses = document.querySelector(".losses");
var resetBtn = document.querySelector(".resetBtn");
var timerSeconds = document.querySelector(".timerSeconds"); 


// variables for keeping track of timer, win/loss, chosen word
var timerCount
var chosenWord = ""
var wins = 0
var losses = 0


// arrays to show letters and blanks
var lettersInRandomWord = [];
var blankLetters = [];

// array of words list
var words = ["javascript", "array", "event"];

// start game
function startGame() {
    console.log("I'm Starting")
    timerCount = 10;
    showRiddleWord();
    startTimer();

}

// timer function to count down timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerSeconds.textContent = timerCount;

        // make sure time doesn't run after hitting zero
        if (timerCount === 0){
        clearInterval(timer);
        }
    }, 1000)

}

function showRiddleWord() {








}

// Make event listener on start button
startBtn.addEventListener('click', startGame)

// win game logic

// lose game logic (includes timer run out)