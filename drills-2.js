'use strict';

function jediName(firstName, lastName) {
  const jediFullName = lastName.slice(0, 3) + firstName.slice(0, 2);
  return jediFullName;
}

console.log(jediName('Bobin', 'jobe'));