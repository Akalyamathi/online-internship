const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + correctAnswer);
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${quizData.length}</p>`;
    }
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();
