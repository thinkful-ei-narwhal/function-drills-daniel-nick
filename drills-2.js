'use strict';

// Jedi Name

function jediName(firstName, lastName) {
  const jediFullName = lastName.slice(0, 3) + firstName.slice(0, 2);
  return jediFullName;
}

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

// days in a month

function daysInMonth(month, leapYear = false) {
  let thirtyOne = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
  let thirty = ['April', 'June', 'September', 'November'];

  if (!(thirtyOne.includes(month) || thirty.includes(month) || month === 'February')) {
    throw 'Must provide a valid month';
  }

  switch (true) {
    case thirtyOne.includes(month):
      return `${month} has 31 days`;

    case thirty.includes(month):
      return `${month} has 30 days`;

    case month === 'February':
      if (leapYear === true) {
        return 'February has 29 days';
      } else {
        return 'February has 28 days';
      }
  }
}

//Rock paper scissors
function rockPaperScissor(playerNum) {
  //1 rock
  //2 paper
  //3 scissors
  if (playerNum < 1 || playerNum > 3) {
    throw 'Need a number between one and three.';
  }

  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(randomNo);

  const playerWinner = 'player wins';
  const compWinner = 'computer wins';

  if (playerNum === randomNo) {
    return 'tie';
  }
  else if (playerNum === 1) {
    if (randomNo === 3) {
      return playerWinner;
    }
    else {
      return compWinner;
    }
  }
  else if (playerNum === 2) {
    if (randomNo === 1) {
      return playerWinner;
    }
    else {
      return compWinner;
    }
  }
  else if (playerNum === 3) {
    if (randomNo === 2) {
      return playerWinner;
    }
    else {
      return compWinner;
    }
  }
}