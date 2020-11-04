var allSpanElements = document.querySelectorAll('span');
var i = 0;
var attempts = 0;
var total = 0;

var playAgainButton = document.querySelector('button');

document.addEventListener('keydown', function (event) {
  if (i === allSpanElements.length - 2) {
    scorePoints();
    playAgainButton.className = 'visible';
  }
  if (allSpanElements[i].textContent === event.key) {
    i++;
    // change word color to green
    allSpanElements[i].className = 'selected';
    allSpanElements[i - 1].className = 'correct';
    accuracy(1);
  } else {
    // change word color to red
    allSpanElements[i].className = 'incorrect';
    accuracy(-1);
  }
});

function accuracy(point) {
  attempts++;
  total = total + point;
}

var scoreh2 = document.querySelector('h2.score');

function scorePoints() {
  var score = Math.round((total / attempts) * 100);
  if (score < 0) {
    score = 0;
  }
  scoreh2.textContent = 'Accuracy Score: ' + score + '%';
}

playAgainButton.addEventListener('click', playAgain);

function playAgain() {
  for (var j = 0; j < allSpanElements.length; j++) {
    allSpanElements[j].className = '';
  }
  i = 0;
  attempts = 0;
  total = 0;
  scoreh2.textContent = '';
  playAgainButton.className = 'invisible';
}
