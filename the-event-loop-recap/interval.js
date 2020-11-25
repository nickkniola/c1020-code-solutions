/* eslint-disable no-console */
let currentCount = 3;
const intervalID = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  } else {
    console.log(currentCount--);
  }
}, 1000);
