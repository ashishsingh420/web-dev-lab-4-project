// Quiz questions array
const quizQuestions = [
  { question: "Who was the first person to walk on the Moon?", answer: "Neil Armstrong" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "What is 9 + 8?", answer: "17" },
  { question: "What is the smallest prime number?", answer: "2" },
  { question: "What does “HTML” stand for?", answer: "HyperText Markup Language" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input
    const userAnswer = prompt(quizQuestions[i].question);

    // Check answer (case-insensitive and trimmed)
    if (
      userAnswer &&
      userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
    ) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Show final score
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Run the quiz
runQuiz();