/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, cur) => acc + cur);
console.log('sum', sum);

const product = numbers.reduce((acc, cur) => acc * cur);
console.log('product', product);

const balance = account.reduce((acc, cur) => {
  if (cur.type === 'deposit') {
    return acc + cur.amount;
  } else if (cur.type === 'withdrawal') {
    return acc - cur.amount;
  }
}, 0);
console.log('balance', balance);

const composite = traits.reduce((acc, cur) => Object.assign(acc, cur), {});
console.log('composite', composite);
