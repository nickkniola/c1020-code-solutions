var allSpanElements = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (allSpanElements[i].textContent === event.key) {
    i++;
  }
});
