// variable declarations
var quizQuestion = document.querySelector(".quiz-question")
console.log(quizQuestion)
var quizChoiceFirst = document.querySelector(".mc-1-choice")
var quizChoiceSecond = document.querySelector(".mc-2-choice")
var quizChoiceThird = document.querySelector(".mc-3-choice")
var quizChoiceFourth = document.querySelector(".mc-4-choice")

var timerSeconds = document.querySelector(".timer-seconds")

var timerCount = 60;

// console.log(quizChoiceFirst)
// console.log(quizChoiceSecond)
// console.log(quizChoiceThird)
// console.log(quizChoiceFourth)
var btnStart = document.querySelector(".start-button")



// arry for questions + answers
var allQuestions = [
    {
        Question: 'What is a boolean?',
        Choices: ['A true or false value', 'A number', 'Dead (leftover) code that creates bugs', 'An undefined value'],
        Correct: 'A true or false value'
    },
    {
        Question: 'What is a method in JavaScript?',
        Choices: ['A tool that enables arithmetic', 'A popular solution to a known issue', 'A predefined function within Javascript', 'A piece of code that makes HTML'],
        Correct: 'A predefined function within Javascript'
    },
    {
        Question: 'What is the correct syntax for linking to an external file called script.js?',
        Choices: ['<script = script.js/>', '<script src="script.js>', '<script src="script.js/>', '<script: script.js>'],
        Correct: '<script src="script.js>'
    },
    {
        Question: 'What functionality can be built with Javascript?',
        Choices: ['A rock, paper, scissors game', 'An app that keeps track of a personal calendar', 'An app that displays weather data', 'All of the above'],
        Correct: 'A true or false value'
    },
    {
        Question: 'What does const represent in Javascript',
        Choices: ['A variable that can be updated', 'A variable that is always false', 'A variable that is always a number', 'A variable whose value cannot be changed'],
        Correct: 'A number'
    }
]

// allQuestions[i].Question
// allQuestions[i].Choices[0]
// allQuestions[i].Choices[1]
// allQuestions[i].Choices[2]
// allQuestions[i].Choices[3]
// allQuestions[i].Correct

var count = 0
for (i = 0; i < 5; i++) {
    var currentQuestion = allQuestions[i].Question
    console.log(currentQuestion)

    if (currentQuestion === allQuestions[0].Question) {
        quizQuestion.innerHTML = currentQuestion
        quizChoiceFirst.innerHTML = allQuestions[0].Choices[0]
        quizChoiceSecond.innerHTML = allQuestions[0].Choices[1]
        quizChoiceThird.innerHTML = allQuestions[0].Choices[2]
        quizChoiceFourth.innerHTML = allQuestions[0].Choices[3]
    } else if (currentQuestion === allQuestions[1].Question) {
        quizQuestion.innerHTML = currentQuestion
        quizChoiceFirst.innerHTML = allQuestions[1].Choices[0]
        quizChoiceSecond.innerHTML = allQuestions[1].Choices[1]
        quizChoiceThird.innerHTML = allQuestions[1].Choices[2]
        quizChoiceFourth.innerHTML = allQuestions[1].Choices[3]
    } else if (currentQuestion === allQuestions[2].Question) {
        quizQuestion.innerHTML = currentQuestion
        quizChoiceFirst.innerHTML = allQuestions[2].Choices[0]
        quizChoiceSecond.innerHTML = allQuestions[2].Choices[1]
        quizChoiceThird.innerHTML = allQuestions[2].Choices[2]
        quizChoiceFourth.innerHTML = allQuestions[2].Choices[3]
    } else if (currentQuestion === allQuestions[3].Question) {
        quizQuestion.innerHTML = currentQuestion
        quizChoiceFirst.innerHTML = allQuestions[3].Choices[0]
        quizChoiceSecond.innerHTML = allQuestions[3].Choices[1]
        quizChoiceThird.innerHTML = allQuestions[3].Choices[2]
        quizChoiceFourth.innerHTML = allQuestions[3].Choices[3]
    } else {
        quizQuestion.innerHTML = currentQuestion
        quizChoiceFirst.innerHTML = allQuestions[4].Choices[0]
        quizChoiceSecond.innerHTML = allQuestions[4].Choices[1]
        quizChoiceThird.innerHTML = allQuestions[4].Choices[2]
        quizChoiceFourth.innerHTML = allQuestions[4].Choices[3]
    }
}


console.log(allQuestions[0].Choices[2])


// quizChoiceFirst.textContent = "Multiple Choice 1"
// quizChoiceSecond.textContent = "Multiple Choice 2"
// quizChoiceThird.textContent = "Multiple Choice 3"
// quizChoiceFourth.textContent = "Multiple Choice 4"

// quizQuestion.textContent = "This is the new queston"
// console.log(quizQuestion.textContent)

function startTimer() {
    timer = setInterval(function() {
        timerCount--
        timerSeconds.innerHTML = timerCount;
        console.log(timerCount)
        // make sure time doesn't run after hitting zero
        if (timerCount === 0){
        clearInterval(timer);
        }
    }, 1000)
}

startTimer()

// start game function
    // timer function
    // [quesiton loop function - needs own array
    // answer loop function - needs own array]
    // evaluate correct user submited answer
    // if question answer = false subtract time from timer
    // game over at timer reach zero OR all questions answered game over 
    // when game over add initials to save high score
    // write high score to leaderboard
