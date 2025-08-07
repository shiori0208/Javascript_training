document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");


  const questions = [
    {
      question: "What is the name of Ricken's self-help book in Severance?",
      choices: [
        "You Are, You Were: A Spiritual Autobiography", 
        "Are You There? A Biography of You", 
        "The You You Are: A Spiritual Biography of You", 
        "Spirit In, Spirit Out: A Biography of You"],
      answer: "The You You Are: A Spiritual Biography of You",
    },
    {
      question: "What is the name of the last episode in Sopranos?",
      choices: [
        "Remember When", 
        "The Blue Comet", 
        "Made in America", 
        "Live Free or Die"],
      answer: "Made in America",
    },

    {
      question: "What is the first Barbie movie that was ever made?",
      choices: [
        "Barbie and the 12 dancing princesses", 
        "Barbie in Rapunzel", 
        "Barbie in the Nutcracker", 
        "Barbie in the Swan Lake"],
      answer: "Barbie in the Nutcracker",
    },

    {
      question: "What is the name of the town in Night in the Woods?",
      choices: [
        "Irish Flats", 
        "Possum Springs", 
        "Aubrey Hills", 
        "Ottertown"],
      answer: "Possum Springs",
    },

    {
      question: "In Genshin Impact, who goes by the name of 'the Fixer' in Inazuma?",
      choices: [
        "Ayato", 
        "Yoimiya", 
        "Gorou", 
        "Thoma"],
      answer: "Thoma",
    },

    {
      question: "Who wrote 'Pride and Prejudice'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "Jane Austen",
    },
  ];



  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {

    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
  nextBtn.classList.add("hidden");
  questionText.textContent = questions[currentQuestionIndex].question;
  choicesList.innerHTML = ""; //clear previous choices
  questions[currentQuestionIndex].choices.forEach((choice) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", function() {
      selectAnswer(choice, li); // Pass the li element
    });
    choicesList.appendChild(li);
  });
}

function selectAnswer(choice, selectedLi) {
  // Remove active class from all choices
  document.querySelectorAll("#choices-list li").forEach(li => {
    li.classList.remove("active");
  });
  // Add active class to the clicked choice
  selectedLi.classList.add("active");

  const correctAnswer = questions[currentQuestionIndex].answer;
  if (choice === correctAnswer) {
    score++;
  }
  nextBtn.classList.remove("hidden");
}

  function showResult() {
    
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;

    // Show different images based on score
  const scoreImage = document.getElementById("score-image");
  if (score === questions.length) {
    scoreImage.src = "perfect.jpg"; // Replace with your image path
    scoreImage.alt = "Perfect Score!";
  } else if (score >= questions.length * 0.7) {
    scoreImage.src = "good.jpg";
    scoreImage.alt = "Good Job!";
  } else if (score >= questions.length * 0.4) {
    scoreImage.src = "avg.jpg";
    scoreImage.alt = "Average Score";
  } else {
    scoreImage.src = "tg.jpg";
    scoreImage.alt = "Try Again!";
  }
  
  }
});
