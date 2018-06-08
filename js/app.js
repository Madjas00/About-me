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
    alert(incorrectMessage + nameU);
  }

}


var questionText = 'Okay ' + nameU + ', am I over the age of 25?';
var correctWord = 'yes';
var correctMessage = 'That is right ' +nameU+ ', I am 28.';
var incorrectMessage = 'Incorrect. I\'m actually 28, ';

askQuestion1(questionText, correctWord, correctMessage, incorrectMessage);

askQuestion1('Do I have a tattoo?' , 'yes' , 'That is correct! I have a tattoo on my right forearm' , 'That is incorrect. I have a tattoo on my right forearm');

//question 1
// var a1 = prompt('Okay, ' +name+ '. Am I over the age of 25?');
// var sanitizedAnswer = a1 .toUpperCase() .trim();

// if (sanitizedAnswer === 'Y'
// || sanitizedAnswer === 'YES') {
//   alert('You answered ' +a1+ '. That is correct ' +name+ '! I am actually 28.'); score++;
// }
// else if (sanitizedAnswer === 'N'
// || sanitizedAnswer === 'NO') {
//   alert('You answered ' +a1+ '. Sorry ' +name+ ' but that is incorrect.');
// }
// else{
//   alert('I am not familiar with that answer.');
// }
// console.log ('answer1 ' +a1);
// console.log ('score = ' +score);
//question 2
// var a1 = prompt('Next question, ' +name+ '. Do I have a tattoo on my forearm?');
// var sanitizedAnswer = a1 .toUpperCase() .trim();

// if (sanitizedAnswer === 'Y'
// || sanitizedAnswer === 'YES') {
//   alert('You answered ' +a1+ '. That is correct! I do have a tattoo on my right forearm.'); score++;
// }
// else if (sanitizedAnswer === 'N'
// || sanitizedAnswer === 'NO') {
//   alert('That is incorrect. I do have a tattoo on my right forearm.');
// }
// else{
//   alert('That is not a valid response! You imbecile!');
// }
// console.log ('answer2 ' +a1);
// console.log ('score = ' +score);
//question 3
// var a1 = prompt('Alright, ' +name+ '. Next question. Do I speak a foreign language?');
// var sanitizedAnswer = a1 .toUpperCase() .trim();

// if (sanitizedAnswer === 'Y'
// || sanitizedAnswer === 'YES') {
//   alert('I wish the answer was correct, but I do not know any foreign languages.');
// }
// else if (sanitizedAnswer === 'N'
// || sanitizedAnswer === 'NO') {
//   alert('You are right. I do not speak any foreign languages.'); score++;
// }
// else{
//   alert('That is not a valid response! You imbecile!');
// }
// console.log ('answer3 ' +a1);
// console.log ('score= ' +score);
//question 4
// var a1 = prompt('Alright, ' +name+ '. Do I know the muffin man?');
// var sanitizedAnswer = a1 .toUpperCase() .trim();

// if (sanitizedAnswer === 'Y'
// || sanitizedAnswer === 'YES') {
//   alert('You answered ' +a1+ '. That is correct! He lives on Drury Lane!'); score++;
// }
// else if (sanitizedAnswer === 'N'
// || sanitizedAnswer === 'NO') {
//   alert('While I do not know him personally, I am aware of him');
// }
// else{
//   alert('That is not a valid response! You imbecile!');
// }
// console.log ('answer4' +a1);
// console.log ('score= ' +score);
//question 5
// var a1 = prompt('Am I the world record holder for "Most Spaghetti Eaten In One Sitting?"');
// var sanitizedAnswer = a1 .toUpperCase() .trim();

// if (sanitizedAnswer === 'Y'
// || sanitizedAnswer === 'YES') {
//   alert('Unfortunately I am not');
// }
// else if (sanitizedAnswer === 'N'
// || sanitizedAnswer === 'NO') {
//   alert('It pains me to admit it, but you are correct.'); score++;
// }
// else{
//   alert('That is not a valid response! You imbecile!');
// }
// console.log ('answer5 ' +a1);
// console.log ('score= ' +score);

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









