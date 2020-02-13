var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//Exercise 1
var numberOfStudents = 15;
var numberOfMentors = 8;

function percentage(st, ment) {
  var percStudents = Math.round((st / (st + ment)) * 100);
  var percMentors = Math.round((ment / (st + ment)) * 100);
  return percStudents;
}

function message(a, b) {
  return (
    "Percentage students: " +
    percentage(a, b) +
    "%\n" +
    "Percentage mentors: " +
    (100 - percentage(a, b)) +
    "%"
  );
}
console.log("Exercise1:");
rez = message(numberOfStudents, numberOfMentors);
console.log(rez);

//Exercise2
function uppercase(stroka) {
  return stroka.toUpperCase();
}
function greeting(name) {
  return "HELLO " + name;
}
console.log("\nExercise2:");
console.log(greeting(uppercase(mentor1)));
console.log(greeting(uppercase(mentor2)));
console.log(greeting(uppercase(mentor3)));
console.log(greeting(uppercase(mentor4)));
console.log(greeting(uppercase(mentor5)));
