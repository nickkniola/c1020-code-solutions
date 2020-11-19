var switchOn = false;
var lightBulb = document.querySelector('.light-bulb');
var container = document.querySelector('.container');
lightBulb.addEventListener('click', flipLightSwitch);

function flipLightSwitch() {
  if (!switchOn) {
    lightBulb.className = lightBulb.className + ' light-bulb-on';
    container.className = container.className + ' container-on';
    switchOn = true;
  } else {
    lightBulb.className = 'light-bulb';
    container.className = 'container';
    switchOn = false;
  }
}
