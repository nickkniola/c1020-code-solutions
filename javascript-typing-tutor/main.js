var allSpanElements = document.querySelectorAll('span');
var i = 0;
var attempts = 0;
var total = 0;

document.addEventListener('keydown', function (event) {
  if (i === allSpanElements.length - 1) {
    scorePoints();
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

function scorePoints() {
  var score = attempts / total;
  return score;
}
