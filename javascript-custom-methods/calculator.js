/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var accumulator = 0;
    for (var i = 0; i < numbers.length; i++) {
      var currentNum = numbers[i];
      accumulator += currentNum;
    }
    return accumulator;
  },
  getAverage: function (numbers) {
    var accumulator = 0;
    for (var i = 0; i < numbers.length; i++) {
      var currentNum = numbers[i];
      accumulator += currentNum;
    }
    return accumulator / numbers.length;
  }
};
