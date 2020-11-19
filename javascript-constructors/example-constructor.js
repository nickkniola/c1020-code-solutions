function ExampleConstructor() {
}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();
console.log('newExample:', newExample);

var isInstance = newExample instanceof ExampleConstructor;
console.log('isInstance:', isInstance);
