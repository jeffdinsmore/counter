// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.

// Here is some sample input:
// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30




$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let items = ["input"];
    userarray =[];
    items.forEach(function(input) {
      let numbers = $(parseInt("input#" + input).val());
      userarray.push(numbers * 5);
      $("#output").append("<li>" + userarray + "</li>");
    });
    
    event.preventDefault();
    
  });
});

// $("#formOne").submit(function(event) {
    
//   let items = ["item1","item2", "item3", "item4" ,"item5" ,"item6"];
//   items.forEach(function(input) {
//     let listItems =  $("input#" + input).val();
//     $("#groceries").append("<li>" + listItems + "</li>");

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