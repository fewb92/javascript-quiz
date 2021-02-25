// variable declarations
var quizQuestion = document.querySelector(".quiz-question")
console.log(quizQuestion)
var quizChoiceFirst = document.querySelector(".mc-1-choice")
var quizChoiceSecond = document.querySelector(".mc-2-choice")
var quizChoiceThird = document.querySelector(".mc-3-choice")
var quizChoiceFourth = document.querySelector(".mc-4-choice")
console.log(quizChoiceFirst)
console.log(quizChoiceSecond)
console.log(quizChoiceThird)
console.log(quizChoiceFourth)

quizChoiceFirst.textContent = "Multiple Choice 1"
quizChoiceSecond.textContent = "Multiple Choice 2"
quizChoiceThird.textContent = "Multiple Choice 3"
quizChoiceFourth.textContent = "Multiple Choice 4"

// quizQuestion.textContent = "This is the new queston"
// console.log(quizQuestion.textContent)

// start game function
    // timer function
    // [quesiton loop function - needs own array
    // answer loop function - needs own array]
    // evaluate correct user submited answer
    // if question answer = false subtract time from timer
    // game over at timer reach zero OR all questions answered game over 
    // when game over add initials to save high score
    // write high score to leaderboard
