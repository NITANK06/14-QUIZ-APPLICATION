
const quizQuestions = [

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "HighText Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },

  {
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "Python",
      "CSS",
      "Java"
    ],
    answer: 2
  },

  {
    question: "Which JavaScript method selects an element by ID?",
    options: [
      "querySelector",
      "getElementById",
      "getElementsByClassName",
      "selectById"
    ],
    answer: 1
  },

  {
    question: "Which company developed JavaScript?",
    options: [
      "Google",
      "Netscape",
      "Microsoft",
      "Apple"
    ],
    answer: 1
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "//",
      "<!-- -->",
      "#",
      "**"
    ],
    answer: 0
  },

  {
    question: "Which CSS property changes text color?",
    options: [
      "font-color",
      "text-style",
      "color",
      "background-color"
    ],
    answer: 2
  },

  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Display Object Method",
      "Digital Ordinance Model"
    ],
    answer: 0
  },

  {
    question: "Which HTML tag creates a hyperlink?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<hyper>"
    ],
    answer: 0
  },

  {
    question: "Which keyword declares a variable in JavaScript?",
    options: [
      "int",
      "string",
      "let",
      "define"
    ],
    answer: 2
  },

  {
    question: "Which CSS layout system is one-dimensional?",
    options: [
      "Grid",
      "Flexbox",
      "Bootstrap",
      "Float"
    ],
    answer: 1
  }

];



const question =
  document.getElementById("question");

const optionsContainer =
  document.getElementById("optionsContainer");

const nextBtn =
  document.getElementById("nextBtn");

const questionCounter =
  document.getElementById("questionCounter");

const timerText =
  document.getElementById("timer");

const resultBox =
  document.getElementById("resultBox");

const scoreText =
  document.getElementById("scoreText");

const restartBtn =
  document.getElementById("restartBtn");

const questionBox =
  document.getElementById("questionBox");



let currentQuestion = 0;

let score = 0;

let selectedOption = null;

let timeLeft = 15;

let timer;


function loadQuestion(){

  clearInterval(timer);

  timeLeft = 15;

  startTimer();

  selectedOption = null;

  const currentQuiz =
    quizQuestions[currentQuestion];

  question.innerText =
    currentQuiz.question;

  questionCounter.innerText =
    `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

  optionsContainer.innerHTML = "";

 

  currentQuiz.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.classList.add("option");

    button.innerText = option;

    // Select answer

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".option")
        .forEach(btn => {

          btn.classList.remove("selected");

        });

      button.classList.add("selected");

      selectedOption = index;

    });

    optionsContainer.appendChild(button);

  });

}



function startTimer(){

  timerText.innerText =
    `Time: ${timeLeft}s`;

  timer = setInterval(() => {

    timeLeft--;

    timerText.innerText =
      `Time: ${timeLeft}s`;

   

    if(timeLeft <= 0){

      clearInterval(timer);

      nextQuestion();

    }

  }, 1000);

}



function nextQuestion(){

  // Check answer

  if(
    selectedOption ===
    quizQuestions[currentQuestion].answer
  ){

    score++;

  }

  currentQuestion++;



  if(currentQuestion >= quizQuestions.length){

    showResults();

  }

  else{

    loadQuestion();

  }

}

function showResults(){

  clearInterval(timer);

  questionBox.classList.add("hidden");

  nextBtn.classList.add("hidden");

  resultBox.classList.remove("hidden");

  scoreText.innerText =
    `Your Score: ${score} / ${quizQuestions.length}`;

}


function restartQuiz(){

  currentQuestion = 0;

  score = 0;

  resultBox.classList.add("hidden");

  questionBox.classList.remove("hidden");

  nextBtn.classList.remove("hidden");

  loadQuestion();

}


nextBtn.addEventListener("click", () => {

  nextQuestion();

});

restartBtn.addEventListener("click", () => {

  restartQuiz();

});


loadQuestion();
