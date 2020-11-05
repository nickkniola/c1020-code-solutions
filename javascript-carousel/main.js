var i = 1;
var prevI = null;
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/039.png', 'images/025.png'];

var intervalID = setInterval(changeImage, 3000);

var carouselImage = document.querySelector('img.carousel-image');
var circleNodeList = document.querySelectorAll('.fa-circle');
var buttonsColumn = document.querySelector('div.col.buttons');
var rightArrow = document.querySelector('i.fa-chevron-right');
var leftArrow = document.querySelector('i.fa-chevron-left');

function changeImage() {
  var image = images[i];
  var circle = circleNodeList[i];
  for (var k = 0; k < circleNodeList.length; k++) {
    circleNodeList[k].setAttribute('class', 'far fa-circle');
  }
  carouselImage.setAttribute('src', image);
  circle.setAttribute('class', 'fas fa-circle');
  if (i === 4) {
    i = -1;
  }
}

buttonsColumn.addEventListener('click', dotAnalyzer);

function dotAnalyzer(event) {
  for (var j = 0; j < circleNodeList.length; j++) {
    var circle = circleNodeList[j];
    if (event.target === circle) {
      i = j;
      changeImage();
      i++;
      clearInterval(intervalID);
      intervalID = setInterval(changeImage, 3000);
    }
  }
}

rightArrow.addEventListener('click', rightArrowAnalyzer);

function rightArrowAnalyzer(event) {
  if (i > 4) {
    i = 0;
  }
  changeImage();
  i++;
  clearInterval(intervalID);
  intervalID = setInterval(changeImage, 3000);
}

leftArrow.addEventListener('click', leftArrowAnalyzer);

function leftArrowAnalyzer(event) {
  clearInterval(intervalID);
  changeImageToLeft();
  intervalID = setInterval(changeImage, 3000);
}

function changeImageToLeft() {
  if (prevI === null && i !== 0) {
    prevI = i - 1;
  }
  i--;
  if (i === -1) {
    i = 4;
  }
  var image = images[i];
  var circle = circleNodeList[i];
  for (var k = 0; k < circleNodeList.length; k++) {
    circleNodeList[k].setAttribute('class', 'far fa-circle');
  }
  carouselImage.setAttribute('src', image);
  circle.setAttribute('class', 'fas fa-circle');
  prevI = i;
}
