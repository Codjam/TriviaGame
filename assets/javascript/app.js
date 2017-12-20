function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;
var timer = 100;


$(document).ready(function(){

	homeScreen();
$('#quiz').hide();
$('.end_game').hide();
$('#answer_display').hide();
$('#start_button').on('click', gameStart);
$('#start_button').on('click', showQuestions);
$('#start_button').on('click', hideStartButton);
$('#answer_button').on('click', showAnswers);


$("#quiz").Done(function(event) {
  alert("Thank you for submitting your answers.");
  playerAnswerArray();
  compareAnswers();
  stop();
  event.preventDefault();
})

 // home screen
function homeScreen () {
$('#start_button').html('<button type="button" class="btn btn-primary btn-lg btn-block">Click here to start game.</button>');
}

function gameStart () {
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease timer variable by one.
  timer--;
  //  Show the number in the #show-number tag.
  $("#game_timer").html("<h2>Time remaining: " + timer + " seconds </h2>");
  //  Once number hits zero...
  if (timer === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }

  if (question1 == "basil") {
    correct++;
  }
  if (question2 == "berbere") {
    correct++;
  }
  if (question3 == "cinnamon") {
    correct++;
  }

var messages = ["Great Job!","Thats just ok","You Really Need to do better"];
var pictures = ["assets/images/great_job.jpg","assets/images/just_ok.jpg","assets/images/do_better.jpg"];

var rang;

if (correct < 1) {
	range  = 2;
}
if (correct > 0 && correct < 3) {
	range = 1;
}
if (correct > 2) {
	range = 0;
}


function showQuestions() {
  $('#quiz').show();
}

function hideStartButton() {
  $('#start_button').hide();




  document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("mesage").innerHTML=messages[rang];
  document.getElementById("number_correct") innerHTML = "You Got" + correct + "correct."
	document.getElementById("picture").src = pictures[range];
}


$("#trivia_questions").hide();
  $("#game_timer").hide();
  $(".end_game").show();
});
// var firstScreen;
//
//
//
//
//
//
// var myQuestions = [
// 	{
// 		question: "One of the most commonly used herbs in Italian cooking?",
// 		answers: {
// 			a: 'carrot',
// 			b: 'basil',
// 			c: 'spice',
// 			d: 'graviola'
// 		},
// 		correctAnswer: 'b'
// 	},
// 	{
// 		question: "what is an Ethiopian spice blend used to season many Ethiopian dishes?",
// 		answers: {
// 			a: 'curry',
// 			b: 'ct36',
// 			c: 'berbere',
// 			d: 'roseHips'
// 		},
// 		correctAnswer: 'c'
// 	}
// ];
// console.log(myQuestions);
//
// setTimeout(tenSeconds, 1000 * 10);




// use jquery for start Button to start timmer
// insert questions with radio buttons/use jquery for questions to insert questions
// use jquery for stop Button to stop timmer/tally the score
// ////////////////////////
// show the user the score
// show reset Button

// Start Button
// https://www.myinstants.com/instant/lets-get-ready-to-rumble/
// Done Button
// https://www.myinstants.com/instant/click-here/









// var myQuestions = [
//     {
//         question: "One of the most commonly used herbs in Italian cooking?",
//         answer: {
//             a:"carrot",
//             b:"basil",
//             c:"spice",
//             d:"graviola"
//         },
//         correctAnswer: "b"
//       },
//       {
//         question: "what is an Ethiopian spice blend used to season many Ethiopian dishes?",
//         answer: {
//             a:"curry",
//             b:"ct36",
//             c:"berbere",
//             d:"roseHips"
//       },
//         correctAnswer: "c"
//       }
// ];

// var myQuestions = [
// 	{
// 		question: "What is 10/2?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '115'
// 		},
// 		correctAnswer: 'b'
// 	},
// 	{
// 		question: "What is 30/3?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '10'
// 		},
// 		correctAnswer: 'c'
// 	}
// ];
//
// console.log(myQuestions);
// {
// question3: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question4: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question5: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question6: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question7: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question8: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question9: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// },
// {
// question10: "what is",
// answer:{
//         a:"",
//         b:"",
//         c"",
//         d""
//       },
//       correctAnswer:"b"
// }
// ];
