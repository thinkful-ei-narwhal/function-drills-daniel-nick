'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);
