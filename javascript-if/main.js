/* eslint-disable no-console */
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}
console.log('isUnderFive', isUnderFive(4));

function isEven(number) {
  return number % 2 === 0;
}
console.log('isEven:', isEven(4));

function startsWithJ(string) {
  return string[0] === 'J';
}
console.log('startsWithJ: ', startsWithJ('JavaScript'));

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
console.log('isOldEnoughToDrink: ', isOldEnoughToDrink({
  name: 'Bartholomew JoJo Simpson',
  age: 10
}));

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
console.log('isOldEnoughToDrive:', isOldEnoughToDrive({
  name: 'Homer Jay Simpson',
  age: 39
}));

function isOldEnoughToDrinkAndDrive(person) {
  return !(person.age);
}
console.log('isOldEnoughToDrinkAndDrive: ', isOldEnoughToDrinkAndDrive({
  name: 'Homer Jay Simpson',
  age: 39
}));

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('categorizeAcidity: ', categorizeAcidity(8));

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro', introduceWarnerBro('wakko'));
