'use strict';

// Jedi Name

function jediName(firstName, lastName) {
  const jediFullName = lastName.slice(0, 3) + firstName.slice(0, 2);
  return jediFullName;
}

console.log(jediName('Bobin', 'jobe'));

// To Infinity

function beyond(num) {
  if (num < 0) {
    console.log('To negative infinity');
  }
  if (num > 0) {
    console.log('To infinity');
  }
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}

beyond(0);

//Cracking the code

function decode(codedSentence) {
  const wordArray = codedSentence.split(' ');
  let decodedMessage = '';
  for (let i = 0; i < wordArray.length; i++) {

    if (wordArray[i][0] === 'a') {
      decodedMessage += wordArray[i][1];
    }
    else if (wordArray[i][0] === 'b') {
      decodedMessage += wordArray[i][2];
    }
    else if (wordArray[i][0] === 'c') {
      decodedMessage += wordArray[i][3];
    }
    else if (wordArray[i][0] === 'd') {
      decodedMessage += wordArray[i][4];
    }
    else {
      decodedMessage += ' ';
    }
  }
  return decodedMessage;
}

console.log(decode('craft block argon meter bells brown croon droop'));
//For loop