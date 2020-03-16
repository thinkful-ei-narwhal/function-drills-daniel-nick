'use strict';

function getYearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth;
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yob(age)}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);
