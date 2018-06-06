'use strict';
//greeting
var name = prompt('Welcome to my About-Me quiz. What is your name?');
    console.log('name? ' + name);
//question 1
var a1 = prompt('Okay, ' +name+ '. Am I over the age of 25?');
var sanitizedAnswer = a1 .toUpperCase() .trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert('You answered ' +a1+ '. That is correct ' +name+ '! I am actually 28.');
}
else if (sanitizedAnswer === 'N'
|| sanitizedAnswer === 'NO') {
    alert('You answered ' +a1+ '. Sorry ' +name+ ' but that is incorrect.')
}
else{
    alert('I am not familiar with that answer.')
}
console.log ('answer1 ' +a1);
//question 2
var a1 = prompt('Next question, ' +name+ '. Do I have a tattoo on my forearm?');
var sanitizedAnswer = a1 .toUpperCase() .trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert('You answered ' +a1+ '. That is correct! I do have a tattoo on my right forearm.');
}
else if (sanitizedAnswer === 'N'
|| sanitizedAnswer === 'NO') {
    alert('That is incorrect. I do have a tattoo on my right forearm.')
}
else{
    alert('That is not a valid response! You imbecile!')
}
console.log ('answer2 ' +a1);
//question 3
var a1 = prompt('Alright, ' +name+ '. Next question. Do I speak a foreign language?');
var sanitizedAnswer = a1 .toUpperCase() .trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert('I wish the answer was correct, but I do not know any foreign languages.');
}
else if (sanitizedAnswer === 'N'
|| sanitizedAnswer === 'NO') {
    alert('You are right. I do not speak any foreign languages.')
}
else{
    alert('That is not a valid response! You imbecile!')
}
console.log ('answer3 ' +a1);
//question 4
var a1 = prompt('Alright, ' +name+ '. Do I know the muffin man?');
var sanitizedAnswer = a1 .toUpperCase() .trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert('You answered ' +a1+ '. That is correct! He lives on Drury Lane!');
}
else if (sanitizedAnswer === 'N'
|| sanitizedAnswer === 'NO') {
    alert('While I do not know him personally, I am aware of him')
}
else{
    alert('That is not a valid response! You imbecile!')
}
console.log ('answer4 ' +a1);
//question 5
var a1 = prompt('Am I the world record holder for "Most Spaghetti Eaten In One Sitting?"');
var sanitizedAnswer = a1 .toUpperCase() .trim();

if (sanitizedAnswer === 'Y'
|| sanitizedAnswer === 'YES') {
    alert('Unfortunately I am not');
}
else if (sanitizedAnswer === 'N'
|| sanitizedAnswer === 'NO') {
    alert('It pains me to admit it, but you are correct.')
}
else{
    alert('That is not a valid response! You imbecile!')
}
console.log ('answer5 ' +a1);

