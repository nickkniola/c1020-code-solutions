/* eslint-disable no-console */
var width = 10;
var height = 30;
var area = width * height;
console.log('area: ', area);
console.log('typeof area: ', typeof area);

var bill = 300;
var payment = 400;
var change = payment - bill;
console.log('change: ', change);
console.log('typeof change: ', typeof change);

var quizzes = 70;
var midterm = 80;
var final = 50;
var grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('typeof grade: ', typeof grade);

var firstName = 'Nick';
var lastName = 'Kniola';
var fullName = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

var pH = 5;
var isAcidic = pH < 7;
console.log('isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

var headCount = 400;
var isSparta = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof motto);