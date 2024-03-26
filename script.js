const startPage = document.querySelector(".start-page");
const quizPage = document.querySelector(".quiz-page");
const resultPage = document.querySelector(".result-page");
const scoreTablePage = document.querySelector(".score-table");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

const scoreElement = document.getElementById("score");
const scoreTableBody = document.getElementById("scoreTable");

const nicknameInput = document.getElementById("nickname");

let currentQuestion = 0;
let score = 0;
let playerName = "";
let randomQuestions = [];

function startQuiz() {
  playerName = nicknameInput.value.trim();
  if (!playerName) {
    alert("Molimo unesite vaš nadimak pre nego što počnete kviz.");
    return;
}

startPage.style.display = "none";
quizPage.style.display = "block";
  randomQuestions = getRandomQuestions();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= randomQuestions.length) {
   endQuiz();
   return;
}

const questionObj = randomQuestions[currentQuestion];
  questionElement.textContent = questionObj.question;

  optionsElement.innerHTML = ""; 

  questionObj.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(userAnswer) {
  const correctAnswer = randomQuestions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;
  showQuestion();
}


function endQuiz() {
  quizPage.style.display = "none";
  resultPage.style.display = "block";
  scoreElement.textContent = `Rezultat: ${score} od ${randomQuestions.length} tačnih odgovora.`;
  updateHighScores();
}

function updateHighScores() {
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ name: playerName, score });
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 10);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  showHighScores();
}

function showHighScores() {
  resultPage.style.display = "none";
  scoreTablePage.style.display = "block";

  scoreTableBody.innerHTML = "";
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.forEach((entry) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = entry.name;
    const scoreCell = document.createElement("td");
    scoreCell.textContent = entry.score;
  row.appendChild(nameCell);
  row.appendChild(scoreCell);
  scoreTableBody.appendChild(row);
  });
}



function endQuiz() {
  quizPage.style.display = "none";
  resultPage.style.display = "block";
  scoreElement.textContent = `Osvojili ste: ${score} od ${randomQuestions.length} tačnih odgovora.`;
  document.getElementById("animated-heading").textContent = `${playerName} broj vaših tačnih odgovora je ${score} `;

  updateHighScores();
}






function restartQuiz() {
  quizPage.style.display = "block";
  resultPage.style.display = "none";
  scoreTablePage.style.display = "none";
  randomQuestions = getRandomQuestions();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}


const heading = document.getElementById('animated-heading');

function fadeIn() {
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.2;
    heading.style.opacity = opacity;
    if (opacity >= 1) clearInterval(interval);
  }, 100);
}

fadeIn();
