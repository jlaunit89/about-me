'use strict'
//Asks the user's name
let username = prompt('What is your name?');
//concatenates the user's response with the welcome message alert
alert('Hello ' + username + '!' + ' Welcome!')

//Asks the first question
let answerOne = prompt('Am I a Project Manager? Answer \'yes\'or\'no\'.').toLowerCase();
//The 'if' function determines whether the user's answer meets the conditions of true or false and returns the alert specific to the answer
if(answerOne === 'yes' || answerOne === 'y') {
    alert('That is correct. I am a Project Manager!');
}else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, You are wrong.');
}else {
    alert('Sorry, plese answer with a yes or no');
}

let answerTwo = prompt('Was I in the Army? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y') {
    alert('That is correct. I was in the Army!');
}else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Sorry, You are wrong.');
}else {
    alert('Sorry, plese answer with a yes or no');
}

let answerThree = prompt('Do I live in Bellevue? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y') {
    alert('That is correct. I am an east-sider!');
}else if (answerThree === 'no' || answerThree === 'n') {
    alert('Sorry, You are wrong.');
}else {
    alert('Sorry, plese answer with a yes or no');
}

let answerFour = prompt('Am I a Patriots fan? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y') {
    alert('That is correct. GO PATS!');
}else if (answerFour === 'no' || answerFour === 'n') {
    alert('Sorry, You are wrong.');
}else {
    alert('Sorry, plese answer with a yes or no');
}

let answerFive = prompt('Do I have a college degree? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y') {
    alert('Sorry, that is incorrect.');
}else if (answerFive === 'no' || answerFive === 'n') {
    alert('Correct. I do not have a college degree yet.')
}else {
    alert('Sorry, plese answer with a yes or no')
}

let attempts = 4;
for (let i = 0; i < 4; i++) {
  let Service1 = prompt('How many years did I serve in the Army?');
  let Service2 = parseInt(Service1);
  let Service3 = 8;
  if (Service2 < Service3) {
    alert('Sorry, that number is low.');
  } else if (Service2 > Service3) {
    alert('Sorry, that number is high.');
  }
  else if (Service2 === Service3) {
    alert('That is correct! I served for 8 years.');
    userScore++;
    break;
  }
  else if(i === 4) {
    alert(`Sorry! I served for ${Service3} years`);
  }
  attempts--;
  alert(`That guess was not correct. You have ${attempts} attempts remaining`);
}


