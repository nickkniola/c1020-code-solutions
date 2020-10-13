function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var convert5MinutesToSeconds = convertMinutesToSeconds(5);
console.log('convert5MinutesToSeconds: ', convert5MinutesToSeconds);

function greet(name) {
  return 'Hey, ' + name;
}
var greetBeavis = greet('Beavis');
console.log('greetBeavis: ', greetBeavis);

function getArea(width, height) {
  return width * height;
}
var areaOf17And42 = getArea(17, 42);
console.log('areaOf17And42: ', areaOf17And42);

function getFirstName(person) {
  return person.firstName;
}
var leloucheFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('leloucheFirstName: ', leloucheFirstName);

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastAccessory = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastAccessory: ', getLastAccessory);
