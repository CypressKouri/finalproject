var currentQuestion = 0; //the question e are currently on

var score = 0; // number of correct answers

var timeleft = 30; // time left for countdown timer
var stopTimer = false;
var countdownTimer;
var showInstructions = true;
const mq = window.matchMedia("(min-width: 1000px)");
var questions = [];
var questionCounter = 0;
var randomNumber = Math.floor(Math.random() * 4) + 1;


/*
fetch all country data from the api
pass the data into the createCapitalCityQuestion() function
from the data create a question that asks "what is the capital city" in html with the name of the country being pulled from the api
put  the correct capital city in a random loacation and record that as the correct answer
pull data from random capital cities to fill in the other answer slots
*/

//fetch the data from the api
function fetchData(){
	fetch('https://restcountries.eu/rest/v2/all')
	 .then(response => response.json())
     .then(data => sendData(data));
	
} //fetchData

// send the data to create capital city question
function sendData(data) {
	//console.log("calling send data");

    var country;
    for (country in data) {
		//console.log("Question for counry " + country);
        createCapitalCityQuestion(data[country]);
    } //for
    console.log(questions);
} // sendData

//create the question by using the data sent in
function createCapitalCityQuestion(dataJSON){
  //console.log(dataJSON);
 // console.log("Creating new question" + questionCounter++);
    document.getElementById("begin").style.display = "none";
   document.getElementById("gridcontainer").style.visibility = "visible";
     // generate a random number between 1 and 4
	 // correspond 1 - a, 2= b  etc
	 // save "answer" in questions array accoringly
	 // put the correct capital in the correct locatio
     // randomly choose 3 other cpatial citys
	 // assign them to the other 3 answers
	 
	
	 if(randomNumber == 1){
		 randomNumber = "a";
		 answertwo = "b"
		 answerthree = "c"
		 answertwo = "d"
	 } else if(randomNumber == 2){
		 randomNumber = "b";
		 answertwo = "a"
		 answerthree = "c"
		 answertwo = "d"
	 } else if(randomNumber == 3){
		 randomNumber = "c";
		 answertwo = "a"
		 answerthree = "b"
		 answertwo = "d"
	 } else if(randomNumber == 4){
		 randomNumber = "d";
		 answertwo = "a"
		 answerthree = "b"
		 answertwo = "c"
	 }
	 
	 var answer = randomNumber;
	 dataJSON.capital = randomNumber + ". " + dataJSON.capital;
	 console.log(dataJSON.capital)

	 
  questions.push({
	  "question": "What is the capital city of " + dataJSON.name, // access the name of the country
	  "a": dataJSON.capital/*, //access the correct capital city
	  "b": dataJSON.capital, //get a different, random country's capital 
	  "c": dataJSON.capital,
	  "d": dataJSON.capital,
	  "e": dataJSON.capital,
	  "f": dataJSON.capital,
	  "image": dataJSON.flag, // get the country's flag
	  "answer": answer*/
});


}


//questions is an array of question objects
/*var questions = [{
    "question": "What is the capital city of Canada?",
    "a": "Washington",
    "b": "Ottawa",
    "c": "Toronto",
    "d": "Montreal",
    "e": "Ontario",
	"f": "Vancouver",
    "image": "images/planet-earth.png",
    "answer": "b"
  },
  {
    "question": "Which of these countries speaks Portugese?",
    "a": "Argentina",
    "b": "Austria",
    "c": "Barbados",
    "d": "Malta",
    "e": "Angola",
	"f": "Kuwait",
    "image": "images/planet-earth.png",
    "answer": "e"
  },
  {
    "question": "What currency is used in Finland?",
    "a": "Pound",
    "b": "Dollar",
    "c": "Franc",
    "d": "Euro",
    "e": "Denar",
	"f": "Dirham",
    "image": "images/planet-earth.png",
    "answer": "d"
  },
  {
    "question": "What is the population of Morocco (in people)?",
    "a": "5,000 - 10,999",
    "b": "11,000 - 16,999",
    "c": "17,000 - 22,999",
    "d": "23,000 - 28,999",
    "e": "29,000 - 34,999",
    "f": "35,000 - 40,999",
    "image": "",
    "answer": "e"
  },
  {
    "question": "Which country is in the Carribean?",
    "a": "Colombia",
    "b": "El Salvador",
    "c": "Falkland Islands (Malvinas)",
    "d": "Guatemala",
    "e": "Honduras",
    "f": "Martinique",
    "image": "",
    "answer": "f"
  },
  {
    "question": "Which country is not in Africa?",
    "a": "Benin",
    "b": "French Guiana",
    "c": "Cabo Verde",
    "d": "Chad",
    "e": "Egypt",
    "f": "Tunisia",
    "image": "",
    "answer": "b"
  },
  {
    "question": "Which country does not share a border with Brazil?",
    "a": "Chile",
    "b": "Peru",
    "c": "Venezuela",
    "d": "Uruguay",
    "e": "Guyana",
    "f": "Paraguay",
    "image": "",
    "answer": "a"
  },
  {
    "question": "What is China's population?",
    "a": "100 million people - 400 million people",
    "b": "401 million people - 700 million people",
    "c": "701 million people - 1 billion people",
    "d": "1 billion people - 1.3 billion people",
    "e": "1.31 billion people - 1.6 billion people",
    "f": "1.61 billion people - 1.9 billion people",
    "image": "",
    "answer": "e"
  },
    {
    "question": "Which country is in Europe?",
    "a": "Georgia",
    "b": "Philippines",
    "c": "Maldives",
    "d": "Moldova (Republic of)",
    "e": "Belize",
    "f": "Greenland",
    "image": "",
    "answer": "d"
  }



];*/

// run code when the body loads
function initialize() {
  document.getElementById("gridcontainer").style.visibility = "hidden";
  document.getElementById("inst").style.display = "none";
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("startup").style.display = "none";
  
}

function beginQuiz(){
  document.getElementById("begin").style.display = "none";
   document.getElementById("gridcontainer").style.visibility = "visible";
   loadQuestion();
}

function instruction() {


  if (showInstructions == true) {
    showInstructions = false;
    document.getElementById("inst").style.display = "block";
  } else {
    showInstructions = true;
    document.getElementById("inst").style.display = "none";
  }
}




//load the current question on the page
function loadQuestion() {

  //check for last question
  let message = "";
  stopTimer = false;

if (currentQuestion == questions.length) {

    // media query event handler
   
    if (score >= 5) {
      message = "Congratulations! Your geographical knowledge is phenomenal! Your score was " + score + "/" + questions.length + ". <br><br>" + "Click to start again.";
     
      document.getElementById("lightbox").style.backgroundSize = "cover";
      document.getElementById("lightbox").style.color = "white";
    } else if (score <= 4) {
       message = "Your geographical knowledge still needs work! Your score was " + score + "/" + questions.length + ". <br><br>" + "Click to start again.";
     
      document.getElementById("lightbox").style.backgroundSize = "cover";
      document.getElementById("lightbox").style.color = "white";
    }

    message = message + "<br><br> Your percentage was " + Math.round(score / questions.length * 100) + "%.";

    //show the lightbox with feedback
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerHTML = "1/" + questions.length;

    document.getElementById('lifeline').style.display = 'block';
    document.getElementById('free').style.display = 'block';

  
  } else {
    document.getElementById("lightbox").style.backgroundImage = "";
    document.getElementById("lightbox").style.backgroundColor = "rgba(0,0,0,0.99)";
  }

  //preload the image
  var img = document.getElementById("image");
  var preLoadImg = new Image();
  preLoadImg.src = questions[currentQuestion].image;

  preLoadImg.onLoad = function() {
    img.width = this.width;
  }
  img.style.maxWidth = "500px";
  img.src = preLoadImg.src;

  //load the question
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("a").innerHTML = "a) " + questions[currentQuestion].a;
  document.getElementById("b").innerHTML = "b) " + questions[currentQuestion].b;
  document.getElementById("c").innerHTML = "c) " + questions[currentQuestion].c;
  document.getElementById("d").innerHTML = "d) " + questions[currentQuestion].d;
  document.getElementById("e").innerHTML = "e) " + questions[currentQuestion].e;
 document.getElementById("f").innerHTML = "f) " + questions[currentQuestion].f;

  startTimer();

} // loadQuestion


//start the timer
function startTimer() {
  if (currentQuestion == 0) {
    timeleft = 120;
  } else {
    timeleft = 30;
  }
  countdownTimer = setInterval(function() {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining <br><br>";
    timeleft -= 1;
    endTimer();
  }, 1000);
} //startTimer

//end the timer
function endTimer() {
  if (timeleft < 0 || stopTimer) {
    clearInterval(countdownTimer);
    currentQuestion++; //add 1 to currentQuestion
    loadQuestion();
  }

} //endTimer

//make the next question button work -- everything is the same as loadQuestion() except for stopTimer
function nextQuestion() {
  //check for last question
  let message = "";
  stopTimer = true;

  if (currentQuestion == questions.length) {



 if (score >= 5) {
      message = "Congratulations! Your geographical knowledge is phenomenal! Your score was " + score + "/" + questions.length + ". <br><br>" + "Click to start again.";
     
      document.getElementById("lightbox").style.backgroundSize = "cover";
      document.getElementById("lightbox").style.color = "white";
    } else if (score <= 4) {
       message = "Your geographical knowledge still needs work! Your score was " + score + "/" + questions.length + ". <br><br>" + "Click to start again.";
     
      document.getElementById("lightbox").style.backgroundSize = "cover";
      document.getElementById("lightbox").style.color = "white";
    }

  } else {
    document.getElementById("lightbox").style.backgroundImage = "";
    document.getElementById("lightbox").style.backgroundColor = "rgba(0,0,0,0.99)";
  }

  //preload the image
  var img = document.getElementById("image");
  var preLoadImg = new Image();
  preLoadImg.src = questions[currentQuestion].image;

  preLoadImg.onLoad = function() {
    img.width = this.width;
  }
  img.style.maxWidth = "500px";
  img.src = preLoadImg.src;

  //load the question
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("a").innerHTML = "a) " + questions[currentQuestion].a;
  document.getElementById("b").innerHTML = "b) " + questions[currentQuestion].b;
  document.getElementById("c").innerHTML = "c) " + questions[currentQuestion].c;
  document.getElementById("d").innerHTML = "d) " + questions[currentQuestion].d;
  document.getElementById("e").innerHTML = "e) " + questions[currentQuestion].e;
   document.getElementById("f").innerHTML = "f) " + questions[currentQuestion].f;

  if (currentQuestion + 2 <= 8) {
    document.getElementById("score").innerHTML = (currentQuestion + 2) + "/" + questions.length;
  } else {
    document.getElementById("score").innerHTML = questions.length + "/" + questions.length;
  }
}

//mark the current question
function markIt(ans) {
  let message = "";


  //if the answer is correct
  if (ans == questions[currentQuestion].answer) {
    // alert("Correct"); //don't use this in real web design

    //add to score and move to next question
    score++; // or score +1 or score += 1
    document.getElementById("score").innerHTML = (currentQuestion + 2) + "/" + questions.length;


    message = "Correct answer! Your score is " + score + "/" + (currentQuestion + 1) + ".";
    message = message + "<br><br> Your percentage is " + Math.round(score / (currentQuestion + 1) * 100) + "%.";




  } //if

  //otherwise notify user the answer is incorrect
  else {
    if (currentQuestion + 2 <= 8) {
      document.getElementById("score").innerHTML = (currentQuestion + 2) + "/" + questions.length;
    } else {
      document.getElementById("score").innerHTML = questions.length + "/" + questions.length;
    }
    message = "Incorrect answer! Your score is " + score + "/" + (currentQuestion + 1) + ".";
    message = message + "<br><br> Your percentage is " + Math.round(score / (currentQuestion + 1) * 100) + "%.";
  } //else

  //show the lightbox with feedback
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("message").innerHTML = message;
  /*
  	 //move to the next quesiton
  	 currentQuestion++; //add 1 to currentQuestion
  	 loadQuestion();*/
  stopTimer = true;
  endTimer();
} // markIt

// close the lightbox 
function closeLightBox() {
  document.getElementById("lightbox").style.display = "none";
} //closeLightBox