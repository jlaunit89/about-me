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
    alert('Sorry, You are wrong.')
}else {
    alert('Sorry, plese answer with a yes or no')
}

let answerOne = prompt('Was I in the Army? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
    alert('That is correct. I was in the Army!');
}else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, You are wrong.')
}else {
    alert('Sorry, plese answer with a yes or no')
}

let answerOne = prompt('Do I live in Bellevue? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
    alert('That is correct. I am an east-sider!');
}else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, You are wrong.')
}else {
    alert('Sorry, plese answer with a yes or no')
}

let answerOne = prompt('Am I a Patriots fan? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
    alert('That is correct. GO PATS!');
}else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, You are wrong.')
}else {
    alert('Sorry, plese answer with a yes or no')
}

let answerOne = prompt('Do I have a college degree? Answer \'yes\'or\'no\'.').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
    alert('Sorry, that is incorrect.');
}else if (answerOne === 'no' || answerOne === 'n') {
    alert('Correct. I do not have a college degree yet.')
}else {
    alert('Sorry, plese answer with a yes or no')
}