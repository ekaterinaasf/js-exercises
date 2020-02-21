/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function a7(str) {
  return str.length > 7 && str[0] === "A";
}

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed"
];

var longNameThatStartsWithA = names.find(a7);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
