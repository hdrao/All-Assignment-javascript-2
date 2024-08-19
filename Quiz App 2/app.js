
// const questions = [
//     {
//       question: "What is your name and hobby?",
//       answers: [
//         { text: "Danish", correct: false },
//         { text: "Rao Danish Sahab", correct: true },
//         { text: "Rd Danish", correct: false },
//         { text: "Danish rao", correct: false },
//       ],
//     },
//     {
//       question: "What is your age nowadays?",
//       answers: [
//         { text: 15, correct: false },
//         { text: 32, correct: false },
//         { text: 21, correct: true },
//         { text: 30, correct: false },
//       ],
//     },
//     {
//       question: "What is your activities nowadays and why?",
//       answers: [
//         { text: "Doing job, because I am hardworking", correct: false },
//         { text: "Watching movie, because I am lazy", correct: false },
//         { text: "Playing cricket, because I like sports", correct: false },
//         { text: "Go to hell, I don't need to tell you", correct: true },
//       ],
//     },
//     {
//       question: "What is your name and hobby?",
//       answers: [
//         { text: "H D Rehman", correct: true },
//         { text: "Rao Danish Sahab", correct: false },
//         { text: "Rd Danish", correct: false },
//         { text: "Danish rao", correct: false },
//       ],
//     },
//   ];

const questions = [
  {
    question: "What is your favorite color?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Red", correct: false },
      { text: "Green", correct: false },
      { text: "Yellow", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Lisbon", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "J.K. Rowling", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "F. Scott Fitzgerald", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "120°C", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Silver", correct: false },
      { text: "Iron", correct: false },
    ],
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent Van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Platinum", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1910", correct: false },
      { text: "1912", correct: true },
      { text: "1914", correct: false },
      { text: "1916", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Beijing", correct: false },
      { text: "Hanoi", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: true },
      { text: "Nile", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Alexander Fleming", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "Isaac Newton", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "What is the primary ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Pepper", correct: false },
      { text: "Onion", correct: false },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Thomas Jefferson", correct: false },
      { text: "George Washington", correct: true },
      { text: "John Adams", correct: false },
      { text: "James Madison", correct: false },
    ],
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "In which continent is the Sahara Desert located?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in bread?",
    answers: [
      { text: "Sugar", correct: false },
      { text: "Flour", correct: true },
      { text: "Milk", correct: false },
      { text: "Salt", correct: false },
    ],
  },
];



  const question_tab = document.querySelector(".question");
  const answer_tab = document.querySelector(".answer-buttons");
  const nextBtn = document.querySelector(".next-btn");
  const testSection = document.querySelector(".first_part");
  const scoreSection = document.querySelector(".score");
  const score_tab = document.querySelector(".score_data");
  const restart = document.querySelector(".play_again");
  let currentQuestion =0;
  let score = 0;
  nextBtn.disabled = true;
  function startQuiz () {
    question_tab.innerHTML = '';
    showQuestion();
  }

  function showQuestion () {
   
    let question =questions[currentQuestion];
    let questionNo = currentQuestion + 1;
    // let answer = questionNo.answers;
    question_tab.innerHTML = `${questionNo}:${question.question}`;
    answer_tab.innerHTML="";
    question.answers.forEach(answer =>{
        let answerButton = document.createElement("button");
        answerButton.textContent = answer.text;
        answerButton.classList.add("answer-button");
        answer_tab.appendChild(answerButton);
        
        if(answer.correct) {
            answerButton.dataset.correct=answer.correct;
        }
        
        answerButton.addEventListener("click", (e)=>{
            let selectedAnswer = e.target;
            
            let checkAnswer = selectedAnswer.dataset.correct === "true";
            if(checkAnswer){
                score++;
                selectedAnswer.style.backgroundColor = "green";
                nextBtn.disabled = false;
                answer_tab.querySelectorAll('.answer-button').forEach(button => button.disabled = true);
            }else{
                console.log("Incorrect");
                selectedAnswer.style.backgroundColor = "red";
                nextBtn.disabled = false;
                answer_tab.querySelectorAll('.answer-button').forEach(button => button.disabled = true);
                let rightAnswer = answer_tab.querySelector("[data-correct='true']");
                rightAnswer.style.backgroundColor = "green";
            }
        })
    })
  };
  
  function handleNext (){
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        showscore();
    }
    nextBtn.disabled =true;
  }

  function showscore () {
    testSection.style.display = "none";
    scoreSection.style.display = "flex";
    score_tab.textContent = `Your final score is ${score} out of ${questions.length}`
  }

  function handlePlayAgain() {
    window.location.href="index.html";
  }

  nextBtn.addEventListener("click", handleNext);
  restart.addEventListener("click", handlePlayAgain);
  startQuiz();