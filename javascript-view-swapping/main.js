var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      var element = tabElements[i];
      if (event.target === element) {
        element.className = 'tab active';
      } else {
        element.className = 'tab';
      }
    }
    var dataViewValue = event.target.getAttribute('data-view');

    for (var j = 0; j < viewElements.length; j++) {
      var viewElement = viewElements[j];
      if (dataViewValue === viewElement.getAttribute('data-view')) {
        viewElement.className = 'view';
      } else {
        viewElement.className = 'view hidden';
      }
    }
  }
});
