'use strict';

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative.');
  }
  return 2020 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth;
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yob(age)}.`;
}

try {
  const greeting1 = createGreeting('Nick', -2);
  console.log(greeting1);
}
catch (error) {
  console.log(error);
}
