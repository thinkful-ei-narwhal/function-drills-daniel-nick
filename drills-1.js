'use strict';

function getYearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  if (name ===  undefined || age === 'undefined') {
    throw new Error('Arguments not valid.');
  }

  if (age < 0) {
    throw new Error('Age can not be negative.');
  }

  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yob}.`;
}

try {
  const greeting1 = createGreeting('Life', 42);
  console.log(greeting1);
}
catch (error) {
  console.log(error.message);
}
