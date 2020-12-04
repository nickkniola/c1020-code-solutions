/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
const myName = takeAChance('Nick');

myName.then(message => {
  console.log(message);
});

myName.catch(err => {
  console.error(err.message);
});
