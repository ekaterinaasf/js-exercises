// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var num1 = numbers.map(function hund(n) {
  return n * 100;
});
var num2 = numbers.map(function(n) {
  return n * 100;
});
var num3 = numbers.map(n => {
  return n * 100;
});
var num4 = numbers.map(n => n * 100);

console.log(numbers);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
