const questions = {
    'Pipes and Cisterns': [
     { question: "Two pipes can fill a tank in 15 and 45 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?", answers: ["10 minutes", "12 minutes", "15 minutes", "18 minutes"], correct: 1 },
     { question: "Pipe A can fill a tank in 12 hours, and pipe B can fill it in 16 hours. However, there is a leak that can empty the tank in 24 hours. If all are opened together, how long will it take to fill the tank?", answers: ["9 hours", "10 hours", "8 hours", "12 hours"], correct: 2 },
     { question: "A pipe can fill a cistern in 40 minutes, while another pipe can fill it in 60 minutes. If both pipes are opened together, but after 10 minutes the first pipe is turned off, how long in total will it take to fill the cistern?", answers: ["30 minutes", "35 minutes", "40 minutes", "45 minutes"], correct: 0 },
     { question: "Two pipes, A and B, can fill a tank in 25 and 35 minutes, respectively. Both pipes are opened, but pipe B is turned off after 10 minutes. How much more time will it take to fill the tank?", answers: ["12 minutes", "15 minutes", "20 minutes", "25 minutes"], correct: 1 },
     { question: "A pipe fills a tank in 5 hours, and another pipe fills it in 8 hours. If there is also a drain that can empty the tank in 10 hours, how long will it take to fill the tank if all are opened together?", answers: ["3 hours", "4 hours", "5 hours", "6 hours"], correct: 0 }
 ]
 ,
    'Probability': [
     { question: "What is the probability of drawing an Ace from a standard deck of 52 cards?", answers: ["1/13", "1/26", "1/52", "1/4"], correct: 0 },
     { question: "If two dice are rolled, what is the probability of getting a sum of 7?", answers: ["1/6", "5/36", "1/12", "7/36"], correct: 0 },
     { question: "A card is drawn at random from a deck of 52 cards. What is the probability of it being a face card (Jack, Queen, or King)?", answers: ["3/13", "1/13", "9/52", "1/4"], correct: 3 },
     { question: "What is the probability of drawing a Queen of Spades from a standard deck of 52 cards?", answers: ["1/26", "1/52", "1/13", "1/4"], correct: 1 },
     { question: "If a coin is tossed three times, what is the probability of getting exactly two heads?", answers: ["3/8", "1/4", "1/2", "1/8"], correct: 0 }
 ],
 
   'Problems on Ages': [
     { question: "The sum of the ages of a mother and her daughter is 50 years. Five years ago, the mother’s age was four times her daughter’s age. What are their present ages?", answers: ["38 and 12", "40 and 10", "35 and 15", "30 and 20"], correct: 0 },
     { question: "A man is currently three times as old as his son. In 15 years, he will be twice as old as his son. What is the son's current age?", answers: ["10 years", "15 years", "20 years", "25 years"], correct: 1 },
     { question: "The difference between the ages of two friends is 12 years. If the older one is twice as old as the younger one, what are their ages?", answers: ["24 and 12", "30 and 18", "36 and 24", "40 and 28"], correct: 0 },
     { question: "A father is twice as old as his son. Twenty years ago, the father's age was twelve times the son’s age. What are their present ages?", answers: ["44 and 22", "40 and 20", "36 and 18", "60 and 30"], correct: 3 },
     { question: "The sum of the ages of a brother and sister is 25 years. Five years ago, the brother was twice as old as his sister. What are their present ages?", answers: ["15 and 10", "18 and 7", "16 and 9", "20 and 5"], correct: 2 }
 ],
 
    'Profit and Loss': [
     { question: "A shopkeeper buys an item for $400 and sells it for $500. What is his profit percentage?", answers: ["20%", "25%", "30%", "15%"], correct: 1 },
     { question: "An article is bought for $250 and sold at a 10% loss. What is the selling price?", answers: ["$225", "$240", "$235", "$245"], correct: 0 },
     { question: "A person sells a book for $540, making a profit of 20%. What was the cost price of the book?", answers: ["$450", "$400", "$500", "$520"], correct: 0 },
     { question: "A trader gives a 5% discount on an item marked at $200 and still makes a profit of 14.25%. Find the cost price of the item.", answers: ["$175", "$180", "$160", "$170"], correct: 3 },
     { question: "If the cost price of 20 items is the same as the selling price of 15 items, what is the profit percentage?", answers: ["20%", "25%", "30%", "33.33%"], correct: 3 }
 ],
 'Cricket Trivia': [
     {
         question: "Who is MS Virat’s Father?",
         answers: ["MAHI", "MSD", "Thala", "Cr7"],
         correct: 0
     },
     { 
         question: "Who holds the record for the highest individual score in a single ODI match?", 
         answers: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "Chris Gayle"], 
         correct: 0 
     },
     { 
         question: "Which team won the first-ever Cricket World Cup in 1975?", 
         answers: ["Australia", "West Indies", "India", "England"], 
         correct: 1 
     },
     { 
         question: "Who is the highest wicket-taker in Test cricket history?", 
         answers: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"], 
         correct: 1 
     },
     { 
         question: "Which Indian cricketer is known as the 'God of Cricket'?", 
         answers: ["Sourav Ganguly", "MS Dhoni", "Sachin Tendulkar", "Virat Kohli"], 
         correct: 2 
     },
     { 
         question: "Who holds the record for the fastest century in T20 international cricket?", 
         answers: ["Chris Gayle", "Rohit Sharma", "AB de Villiers", "David Miller"], 
         correct: 3 
     }
 ]
 ,
 'Bollywood Trivia': [
     { 
         question: "Who is known as the 'King of Bollywood'?", 
         answers: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Hrithik Roshan"], 
         correct: 2 
     },
     { 
         question: "Which Bollywood movie holds the record for the highest box office collection worldwide?", 
         answers: ["Dangal", "Baahubali 2", "PK", "Pathaan"], 
         correct: 3 
     },
     { 
         question: "In which movie did Amitabh Bachchan say the iconic dialogue, 'Rishtey mein toh hum tumhare baap lagte hain'?", 
         answers: ["Sholay", "Deewar", "Agneepath", "Shehenshah"], 
         correct: 3 
     },
     { 
         question: "Who was the director of the Bollywood film 'Lagaan'?", 
         answers: ["Karan Johar", "Ashutosh Gowariker", "Rajkumar Hirani", "Sanjay Leela Bhansali"], 
         correct: 1 
     },
     { 
         question: "Which actress is known as the 'Queen of Bollywood' after her movie of the same name?", 
         answers: ["Priyanka Chopra", "Deepika Padukone", "Kangana Ranaut", "Alia Bhatt"], 
         correct: 2 
     }
 ],
 
 };
 


let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let skippedQuestions = 0;
let time = 10;
let timer;
let currentCategory;
let userName = "";

const welcomeScreen = document.getElementById('welcomeScreen');
const questionElement = document.getElementById('question');
const answerButtons = Array.from(document.getElementsByClassName('answer'));
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const scoreContainer = document.getElementById('score');
const quizContainer = document.getElementById('quizContainer');
const categorySelection = document.querySelector('.categorySelection');
const userNameInput = document.getElementById('username');

document.querySelector('.input button').addEventListener('click', () => {
    userName = userNameInput.value.trim(); // Trim to remove whitespace
    if (userName === "") {  // Check if input is empty
        alert("Please enter your name."); // Show alert if empty
    } else {
        // Hide input and show category selection if name is entered
        document.querySelector('.input').style.display = 'none';
        document.querySelector('.user').style.display = 'none';
        categorySelection.style.display = 'block';
    }
});

function selectCategory(category) {
    if (!userName) {  // Check if the userName is empty
        alert("Please enter your name before selecting a category.");  // Show alert if name is empty
        return;
    }
    currentCategory = category;
    startQuiz();
}

function startQuiz() {
    welcomeScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    quizContainer.classList.add('question-container');
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedQuestions = 0;
    time = 10;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    questionElement.style.display = 'block';
    document.querySelector('.answers').style.display = 'block';
    timerElement.style.display = 'block';
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    quizContainer.disabled= 'block';
    questionElement.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.style.backgroundColor = '#007bff';
        button.disabled = false;
        button.onclick = () => selectAnswer(index);
    });
    nextButton.style.display = 'none';
    time = 10;
    startTimer();
}

function startTimer() {
    timerElement.innerText = `Time: ${time}s`;
    clearInterval(timer);
    timer = setInterval(() => {
        time--;
        timerElement.innerText = `Time: ${time}s`;
        if (time <= 0) {
            clearInterval(timer);
            selectAnswer(null, true); // Question was skipped
        }
    }, 1000);
}

function selectAnswer(index, isSkipped = false) {
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    answerButtons.forEach(button => button.disabled = true);
    clearInterval(timer);
    if (!isSkipped && index === currentQuestion.correct) {
        answerButtons[index].style.backgroundColor = '#4caf50';
        correctAnswers++;
    } else if (!isSkipped) {
        incorrectAnswers++;
        if (index !== null) answerButtons[index].style.backgroundColor = '#d9534f';
        answerButtons[currentQuestion.correct].style.backgroundColor = '#4caf50';
    } else {
        skippedQuestions++;
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.remove('question-container');
    scoreContainer.classList.add('question-score');
    questionElement.style.display = 'none';
    document.querySelector('.answers').style.display = 'none';
    nextButton.style.display = 'none';
    timerElement.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreContainer.innerHTML = `Great job, ${userName}! <br>Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}, Skipped: ${skippedQuestions} <br><button onclick="restartQuiz()">Restart Quiz</button>`;
}

function restartQuiz() {
    // Hide the score container and other quiz elements
    scoreContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    categorySelection.style.display = 'none';
    questionElement.style.display = 'none';
    document.querySelector('.answers').style.display = 'none';
    nextButton.style.display = 'none';
    timerElement.style.display = 'none';

    // Reset counters and timer
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedQuestions = 0;
    time = 10;
    userName = ""; // Clear username

    // Clear the username input field
    userNameInput.value = '';

    // Show the welcome screen and input field for a new start
    document.querySelector('.input').style.display = 'block';
    document.querySelector('.user').style.display = 'block';
    welcomeScreen.style.display = 'block';
}
