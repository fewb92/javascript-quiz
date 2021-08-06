// variable declarations
var quizQuestion = document.querySelector(".quiz-question")
console.log(quizQuestion)
var quizChoices = document.querySelector(".quiz-choices")
var quizChoiceFirst = document.querySelector(".mc-1-choice")
var quizChoiceSecond = document.querySelector(".mc-2-choice")
var quizChoiceThird = document.querySelector(".mc-3-choice")
var quizChoiceFourth = document.querySelector(".mc-4-choice")
// var quizChoice = document.querySelectorAll(".mc-choice")
var timerSeconds = document.querySelector(".timer-seconds")

var timerCount = 60;

// console.log(quizChoiceFirst)
// console.log(quizChoiceSecond)
// console.log(quizChoiceThird)
// console.log(quizChoiceFourth)
var btnStart = document.querySelector(".start-button")

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
        Choices: ['<script = script.js/>', '<script src="script.js">', '<script src="script.js/>', '<script: script.js>'],
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

// for (i = 0; i < 5; i++) {
//     var currentQuestion = allQuestions[i].Question
//     console.log(currentQuestion)

//     if (currentQuestion === allQuestions[0].Question) {
//         quizQuestion.innerHTML = currentQuestion
//         quizChoiceFirst.innerHTML = allQuestions[0].Choices[0]
//         quizChoiceSecond.innerHTML = allQuestions[0].Choices[1]
//         quizChoiceThird.innerHTML = allQuestions[0].Choices[2]
//         quizChoiceFourth.innerHTML = allQuestions[0].Choices[3]
//     } else if (currentQuestion === allQuestions[1].Question) {
//         quizQuestion.innerHTML = currentQuestion
//         quizChoiceFirst.innerHTML = allQuestions[1].Choices[0]
//         quizChoiceSecond.innerHTML = allQuestions[1].Choices[1]
//         quizChoiceThird.innerHTML = allQuestions[1].Choices[2]
//         quizChoiceFourth.innerHTML = allQuestions[1].Choices[3]
//     } else if (currentQuestion === allQuestions[2].Question) {
//         quizQuestion.innerHTML = currentQuestion
//         quizChoiceFirst.innerHTML = allQuestions[2].Choices[0]
//         quizChoiceSecond.innerHTML = allQuestions[2].Choices[1]
//         quizChoiceThird.innerHTML = allQuestions[2].Choices[2]
//         quizChoiceFourth.innerHTML = allQuestions[2].Choices[3]
//     } else if (currentQuestion === allQuestions[3].Question) {
//         quizQuestion.innerHTML = currentQuestion
//         quizChoiceFirst.innerHTML = allQuestions[3].Choices[0]
//         quizChoiceSecond.innerHTML = allQuestions[3].Choices[1]
//         quizChoiceThird.innerHTML = allQuestions[3].Choices[2]
//         quizChoiceFourth.innerHTML = allQuestions[3].Choices[3]
//     } else {
//         quizQuestion.innerHTML = currentQuestion
//         quizChoiceFirst.innerHTML = allQuestions[4].Choices[0]
//         quizChoiceSecond.innerHTML = allQuestions[4].Choices[1]
//         quizChoiceThird.innerHTML = allQuestions[4].Choices[2]
//         quizChoiceFourth.innerHTML = allQuestions[4].Choices[3]
//     }
// }


// console.log(allQuestions[0].Choices[2])


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
        // console.log(timerCount)
        // make sure time doesn't run after hitting zero
        if (timerCount === 0){
        clearInterval(timer);
        }
    }, 1000)
}

// function incrementCount() {

// }




btnStart.onclick = function () {
    startTimer()
    console.log(count)
    btnStart.style.display = 'none'
    showQuestion()
    storeChoice()
}

function showQuestion() {
    console.log(count)
    var currentQuestion = allQuestions[count].Question
    quizQuestion.textContent = currentQuestion
    quizChoiceFirst.textContent = allQuestions[count].Choices[0]
    quizChoiceSecond.textContent = allQuestions[count].Choices[1]
    quizChoiceThird.textContent = allQuestions[count].Choices[2]
    quizChoiceFourth.textContent = allQuestions[count].Choices[3]
}

let html = '<button>Next</button>'


const storeChoice = function () {
quizChoiceFirst.addEventListener('click', event => {
    var choice = event.target.textContent
    console.log(choice)
    if (allQuestions[count].Correct === choice) {
        count++
        console.log(timerCount)
        console.log(count)
        console.log('right answer')

        let nextBtn = document.createElement('button')
        nextBtn.innerHTML('<button>Next</button>')
        nextBtn.style.display = 'block'
        nextBtn.classList.add('start-button')
        
    }
})
quizChoiceSecond.addEventListener('click', event => {
    var choice = event.target.textContent
    console.log(choice)
    if (allQuestions[count].Correct === choice) {

        count++
        console.log(count)
        console.log('right answer')
        if (count < allQuestions.length) {
            const nextBtn = document.createElement('div')
            nextBtn.classList.add('start-button')
        }
    }
})
quizChoiceThird.addEventListener('click', event => {
    var choice = event.target.textContent
    console.log(choice)
    if (allQuestions[count].Correct === choice) {
        count++
        console.log(count)
        console.log('right answer')
        if (count < allQuestions.length) {
            const nextBtn = document.createElement('div')
            nextBtn.classList.add('start-button')
        }
    }
})
quizChoiceFourth.addEventListener('click', event => {
    var choice = event.target.textContent
    console.log(choice)
    if (allQuestions[count].Correct === choice) {
        count++
        console.log(count)
        console.log('right answer')
        if (count < allQuestions.length) {
            const nextBtn = document.createElement('div')
            nextBtn.classList.add('start-button')
        }
    }

    
})
}

function answerCheck() {
    if (this.value == question.answer) {
        correctText.setAttribute("id", "correctText.show");
        score++;
        currentScoreEl.textContent = score;
        questionOrder++;
        questionEl.removeChild(ask);
        answersEl.removeChild(buttonOne);
        answersEl.removeChild(buttonTwo);
        answersEl.removeChild(buttonThree);
        answersEl.removeChild(buttonFour);
        if (questionOrder < questions.length){
            cueQuestion();
        }
    } else {
        wrongText.setAttribute("id", "wrongText.show");
        countTime -= 3;
        setTimeout(function() { wrongText.setAttribute("id", "wrongText"); }, 500);
    }
};

function cueQuestion() {
    setTimeout(function() { correctText.setAttribute("id", "correctText"); },1500);
    question = allQuestions[questionOrder];
    ask = document.createElement('span');
    ask.setAttribute("class", "mt-4");
    ask.textContent = questions[questionOrder].prompt;
    ask.id = "ask";
    questionEl.appendChild(ask);
    for (var i = 0; i < question.choices.length; i++) {
        choice = document.createElement('button');
        choice.textContent = question.choices[i];
        choice.id = "button" + (i + 1);
        choice.value = i;
        choice.setAttribute("class", "btn-sm btn-primary px-2 mx-2 mt-1");
        answersEl.appendChild(choice);
    }
    // Event listeners for answer buttons
    quizChoiceFirst.addEventListener('click', answerCheck);
    quizChoiceSecond.addEventListener('click', answerCheck);
    quizChoiceThird.addEventListener('click', answerCheck);
    quizChoiceFourth.addEventListener('click', answerCheck);
};

function answerCheck() {
    if (this.value == question.answer) {
        correctText.setAttribute("id", "correctText.show");
        score++;
        currentScoreEl.textContent = score;
        questionOrder++;
        questionEl.removeChild(ask);
        answersEl.removeChild(buttonOne);
        answersEl.removeChild(buttonTwo);
        answersEl.removeChild(buttonThree);
        answersEl.removeChild(buttonFour);
        if (questionOrder < questions.length){
            cueQuestion();
        }
    } else {
        wrongText.setAttribute("id", "wrongText.show");
        countTime -= 3;
        setTimeout(function() { wrongText.setAttribute("id", "wrongText"); }, 500);
    }
};



// function that will be a click handler for the answer buttons -> accept event as param -> added .quiz-choice-container
    // grab event.target.textContent save as choice var
    // if statement -> compare allQuestions[count].correct === choice
        // run logic for a correct answer
        // user feedback -> increment score
    // else
        // run logic for incorrect answer
        // user feedback -> decrement score -> time from clock???
    // if count < allQuestions.length
        // show the next button
    // else
        // endGame()

// next button click handler
    // increment count
    // showQuestion()



// when user presses start
    // set count = 0
    // start timer
    // reveal quiz
    // check answer
        // when user presses answer button
            // if answer correct add time, add to score
            // else subtract time
            // count ++
    // "if count =" statements for questions and answer display
    // if count > no. of questions
        // reveal score
        // local storage score
        // local storage user provided name



