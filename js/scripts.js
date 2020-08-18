// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.

// Here is some sample input:
// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30

userarray =[]
forEach(function(input) {
  userarray.push(input * 5);
});
return userarray;

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    
  $("#output").append("<li>" + userarray + "</li>");
  }




// const array = [0,1,2,3,4,5];
// let doubledArray = [];
// array.forEach(function(element) {
//   doubledArray.push(element * 2);
// });
// doubledArray;

// const array = [0,1,2,3,4,5];
// let sum = 0;
// array.forEach(function(element) {
//   sum += element;
// });
// sum;

// const array = [0,1,2,3,4,5];
// let sum = 0;
// let oldSum;
// let newSum;
// array.forEach(function(numberToAdd) {
//   debugger;
//   oldSum = sum;
//   sum = sum + numberToAdd;
//   newSum = sum;
// });