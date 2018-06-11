//greeting
var nameU = prompt('Welcome to my About-Me quiz. What is your name?');
var score = 0;
console.log('name? ' + nameU);



function askQuestion1(questionText, correctWord, correctMessage, incorrectMessage) {

  var correctLetter = correctWord[0];

  var question1 = prompt(questionText).toLowerCase();

  if (question1 === correctWord || question1 === correctLetter) {
    alert(correctMessage);

  } else {
    alert(incorrectMessage);
  }

}


var questionText = 'Okay ' + nameU + ', am I over the age of 25?';
var correctWord = 'yes';
var correctMessage = 'That is right ' +nameU+ ', I am 28.';
var incorrectMessage = 'Incorrect. I\'m actually 28, ';

askQuestion1(questionText, correctWord, correctMessage, incorrectMessage);

askQuestion1('Do I have a tattoo?' , 'yes' , 'That is correct! I have a tattoo on my right forearm' , 'That is incorrect. I have a tattoo on my right forearm');

askQuestion1('Do I speak a foreign language?' , 'no' , 'That is correct! I would love to learn one though' , 'Incorrect. While I wish I did speak a foreign language I do not.');

askQuestion1('Alright, ' +nameU+ '. Do I know the muffin man?', 'yes' , 'That is correct. He lives on Drury lane.' , 'While I do not know him personally I am aware of him.' );

askQuestion1('Am i the world record holder for "most spaghetti eaten in one sitting?"' , 'no' , 'I wish I was but sadly I am not.' , 'That is nice of you to think so. Unfortunately I am not.');

//question 6

// var guess = prompt('What is my favorite number?');
// console.log ('Guess is ' +guess);
// var guessCount = 1;

// while (guess !== '2') {
//   if (guess === null) {
//     console.log('Guess is null; breaking');
//     break;
//   }

//   var promptWarning = 'Wrong!';
//   if (guess >2) {
//     promptWarning = 'Too high!';
//   } else if (guess < 2) {
//     promptWarning = 'Too low!';
//   }
//   console.log(promptWarning);

//   if (guessCount >3) {
//     alert('Too Many Guesses');
//     break;
//   }

//   guess = prompt(promptWarning + ' Try Again: What is my favorite number?');

//   console.log('Guess is ' + guess);

//   guessCount = guessCount + 1;

//   console.log('guessCount is ' +guessCount);
//   console.log('end of while loop');
// }


// console.log('while loop exited');

// if (guess === null) {
//   alert('Wimp. My fav num is 2!');
// } else {
//   console.log('not a wimp');

//   if (guessCount === 4) {
//     alert('You Lose!');
//   } else {
//     console.log('Lose');



//     if (guessCount === 1) {
//       alert('Got it first try');
//     } else {
//       alert('Correct! It took ' +guessCount+ ' guesses.');
//     }

//   }
// }









