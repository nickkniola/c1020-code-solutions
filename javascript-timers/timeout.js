setTimeout(addMessageToH1, 2000);

var h1 = document.querySelector('h1');
function addMessageToH1() {
  h1.textContent = 'Hello There';
}
