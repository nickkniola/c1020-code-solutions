var userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', listCreator);

function listCreator() {
  console.log('xhr.status on load:', xhr.status);
  console.log('xhr.response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var userObject = xhr.response[i];
    var liElement = document.createElement('li');
    liElement.textContent = userObject.name;
    userList.appendChild(liElement);
  }
}

xhr.send();
