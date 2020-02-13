var numberOfStudents = 15;
var numberOfMentors = 8;

var percStudents =
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
var percMentors =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;

console.log("Percentage students: " + Math.round(percStudents) + "%");
console.log("Percentage mentors: " + Math.round(percMentors) + "%");
