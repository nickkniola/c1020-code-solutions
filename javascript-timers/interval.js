var i = 4;

var intervalID = setInterval(countdown, 1000);

var h1 = document.querySelector('h1');

function countdown() {
  if (i > 0) {
    h1.textContent = i;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
  i--;
}
