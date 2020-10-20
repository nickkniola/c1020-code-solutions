var lightBulb = document.querySelector('.light-bulb');
var container = document.querySelector('.container');
lightBulb.addEventListener('click', flipLightSwitch);

function flipLightSwitch() {
  if (lightBulb.className === 'light-bulb') {
    lightBulb.className = lightBulb.className + ' light-bulb-on';
    container.className = container.className + ' container-on';
  } else {
    lightBulb.className = 'light-bulb';
    container.className = 'container';
  }
}
