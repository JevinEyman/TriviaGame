$(document).ready(function() {

$("#start").click(function(){
 alert("Game time!");
});

var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");

function buildQuiz(){
	 // we'll need a place to store the HTML output
  var output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
	myQuestions.forEach( (currentQuestion, questionNumber) => {
  // here goes the code we want to run for each question
});

}

function showResults(){
		 // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = 'input[name=question'+questionNumber+']:checked';
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


var myQuestions = [
  {
    question: "Which one of these countries is in Europe?",
    answers: {
      a: "USA",
      b: "Spain",
      c: "China",
      d: "Brazil"
    },
    correctAnswer: "b"
  },
  {
    question: "What continent is China on?",
    answers: {
      a: "North America",
      b: "Africa",
      c: "Asia",
      d: "Europe"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the capitol of France?",
    answers: {
      a: "Paris",
      b: "Moscow",
      c: "Dublin",
      d: "Buenos Aires"
    },
    correctAnswer: "a"
  },
  {
    question: "Which country is in Africa?",
    answers: {
      a: "Mexico",
      b: "Chile",
      c: "New Zealand",
      d: "Egypt"
    },
    correctAnswer: "d"
  },
  {
    question: "Where is Italy located?",
    answers: {
      a: "Europe",
      b: "South America",
      c: "Oceania",
      d: "Greenland"
    },
    correctAnswer: "a"
  }
];


});