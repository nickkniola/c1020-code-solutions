var num1 = 4;
var num2 = 3;
var num3 = 5;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

var heroes = ['suppaman', 'arale', 'senbei', 'gatchan'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Lord of The Rings',
    author: 'JRR Tolkien'
  },
  {
    title: 'Star Wars',
    author: 'George Lucas'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Nick Kniola';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
