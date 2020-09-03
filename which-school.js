const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log("I am 13. Which school should I go to?");
console.log(whichSchool(13));
console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));
console.log("I am 20. Which school should I go to?");
console.log(whichSchool(20));