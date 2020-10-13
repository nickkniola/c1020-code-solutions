/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName: 'Nick',
  lastName: 'Kniola',
  age: 28
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'QA Operator';
console.log('student.livesInIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation: ', student.previousOccupation);
console.log('student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Fit',
  year: '2010'
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log("vehicle['color']:", vehicle['color']);
console.log("vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('vehicle: ', vehicle);

var pet = {
  name: 'Dog #1',
  type: 'golden retriever'
};
delete pet.name;
delete pet.type;
console.log('pet: ', pet);
