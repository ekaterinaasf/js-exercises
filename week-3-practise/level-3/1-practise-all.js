/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
//Level1
function level1(arg) {
  if (
    arg.length >= 5 &&
    arg.match(/[A-Z]+/) &&
    arg.match(/[0-9]+/) &&
    arg.match(/[a-z]+/)
  ) {
    return true;
  } else {
    return false;
  }
}
var PasswordValidationResult = password.map(level1);
console.log(PasswordValidationResult);

//Level2
function level2(arg) {
  if (
    arg.length >= 5 &&
    arg.match(/[A-Z]+/) &&
    arg.match(/[0-9]+/) &&
    arg.match(/[a-z]+/) &&
    arg.match(/[!#$%.]+/)
  ) {
    return true;
  } else {
    return false;
  }
}
var PasswordValidationResult = password.map(level2);
console.log(PasswordValidationResult);

//Level3
PreviousPassword = [
  "fhD8!yrjj",
  "ttkTu.wer3",
  "dvyyeyY!5",
  "qwbfj76%",
  "tytT3729."
];
function level3(arg) {
  if (
    arg.length >= 5 &&
    arg.match(/[A-Z]+/) &&
    arg.match(/[0-9]+/) &&
    arg.match(/[a-z]+/) &&
    arg.match(/[!#$%.]+/) &&
    !PreviousPassword.some(a => a === arg)
  ) {
    return true;
  } else {
    return false;
  }
}
var PasswordValidationResult = password.map(level3);
console.log(PasswordValidationResult);
