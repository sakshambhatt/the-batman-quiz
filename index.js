var readLineSync = require("readline-sync");
var userName = readLineSync.question("Enter your name to begin: ");
var score = 0;
var userAnswer = "ABC";
var choiceMarker = "X";
console.log("--------------------------------");

var highscores = [
  {
    name: "Vaibhav Haldia",
    score: 11
  },
  {
    name: "Nikhil Shenoy",
    score: 10
  },
  {
    name: "Dick Grayson",
    score: 10
  },
  {
    name: "Jason Todd",
    score: 9
  }
];

var questionBank = [
  {
    question: "What is the real identity of the OG Batman?",
    answer: "Bruce Wayne",
    options: ["Alfred Wayne", "Bruce Wayne", "Thalia Wayne"]
  },
  {
    question: "What is the name of Batman's father?",
    answer: "Thomas Wayne",
    options: ["Thomas Wayne", "Mr. Fox", "Carmine Falcone"]
  },
  {
    question: "What is the name of Batman's mother?",
    answer: "Martha Wayne",
    options: ["Thalia Al Ghul", "Selena Kyle", "Martha Wayne"]
  },
  {
    question: "What is the name of Batman's Butler?",
    answer: "Alfred",
    options: ["Alfred", "Jarvis", "Jor El"]
  },
  {
    question: "What is the name of police commissioner who helps Batman in his quests against crime?",
    answer: "Jim Gordon",
    options: ["Jimmy Fallon", "Jim Gordon", "Jimmy Kimmel"]
  },
  {
    question: "What is the real name of villain, Two Face?",
    answer: "Harvey Dent",
    options: ["Dr. Jonathan Crane", "Oswald Cobblepot", "Harvey Dent"]
  },
  {
    question: "Who is the world's best detective, yet?",
    answer: "Batman",
    options: ["Batman", "Sherlock Holmes", "Byomkesh Bakshi"]
  },
  {
    question: "Who trained Batman at Nanda Parbat?",
    answer: "Ra's al Ghul",
    options: ["Oliver Queen", "Barry Allen", "Ra's al Ghul"]
  },
  {
    question: "Which villain trapped Batman and gave him puzzles to solve to get out?",
    answer: "Riddler",
    options: ["Deadshot", "Deathstroke", "Riddler"]
  },
  {
    question: "Which villian can manipulate plants?",
    answer: "Poison Ivy",
    options: ["The Swamp", "Poison Ivy", "Bane"]
  },
  {
    question: "What is the real name of Joker?",
    answer: "Arthur Fleck",
    options: ["Bob Kane", "Mark Hamill", "Arthur Fleck"]
  }
];

console.log("Welcome, " + userName + "! You will be asked questions about the batman and given 3 options. Select the correct ones to score points. Score as high as you can because Gotham city needs you!")


function playQuiz(array) {

  for(var i = 0; i < array.length; i++) {

    console.log("--------------------------------");
    console.log(array[i].question);
    for(var j = 0; j < array[i].options.length; j++) {

      if(j == 0) {
        choiceMarker = "a. ";
      } else if(j == 1) {
        choiceMarker = "b. ";
      } else {
        choiceMarker = "c. ";
      }
      console.log(choiceMarker + array[i].options[j]);
    }

    userAnswer = readLineSync.question("Enter your choice (a, b, c): ");

    if(userAnswer === "a") {

      userAnswer = array[i].options[0];
    } else if(userAnswer === "b") {

      userAnswer = array[i].options[1];
    } else {

      userAnswer = array[i].options[2];
    }

    if(userAnswer === array[i].answer) {

      console.log("You were right!")
      score = score + 1;
    } else {

      console.log("You were wrong. The correct answer is: " + array[i].answer);
    }
  }
  console.log("--------------------------------");
  console.log(userName + ", you scored " + score + " points!");
  if(score >= 5 && score < 7) {
    console.log("You are useful, but you need to work hard!");
  } else if(score >=7 && score < 9) {
    console.log("You can help the dark knight, from the batcave. Expect to be contacted by an old british man...");
  } else if(score >= 9) {
    console.log(userName + ", there is no way to put this...As your score is quite high, they were sent to the dark knight and he uh... has requested you to join him in field as the Nighwing. Gotham needs you!");
  } else {
    console.log("You don't care about Gotham, it's okay...");
  }

  console.log("Highscore board!!!")
  console.log("--------------------------------");

  for(var i = 0; i < highscores.length; i++) {
    console.log(highscores[i].name + " " + highscores[i].score);
  }
  console.log("If you think that you matched or beat the highscores, send a screenshot to the creator of the quiz");
}

playQuiz(questionBank);