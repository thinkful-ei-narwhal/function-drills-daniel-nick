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