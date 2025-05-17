// chap 12
// IF ELSE & ELSE IF STATEMENT
// var input = prompt("ENter a character");
// var ascii = input.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("Number");
// } else if (ascii >= 65 && ascii <= 90) {
//     alert("Uppercase Letter");
// } else if (ascii >= 97 && ascii <= 122) {
//     alert("Lowercase Letter");
// } else {
//     alert("Other character");
// }
// Ques2
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");

// if (a > b) {
//     alert(a + " is larger");
// } else if (b > a) {
//     alert(b + " is larger");
// } else {
//     alert("Both are equal");
// }
// Ques3
// var num = +prompt("Enter a number");

// if (num > 0) {
//     alert("Positive");
// } else if (num < 0) {
//     alert("Negative");
// } else {
//     alert("Zero");
// }
// Ques4
// var letter = prompt("Enter a character").toLowerCase();
// if("aeiou".includes(letter)) {
//     alert("Vowel");
// } else {
//     alert("Not vowel");
// }
// Ques5
// var correct = "12345";
// var user = prompt("Enter password");

// if(user === "") {
//     alert("Please enter your password");
// } else if (user === correct){
//     alert("Correct password");
// } else{
//     alert("Incorrct password");
// }
// // Ques6
// var hour = 13;
// var greeting = "";

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);
// Ques7
// var time = +prompt("Enter time in 24hr format (e.g. 1900)");
// if (time >= 0 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon"); 
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time <= 2359){
//     alert("Good Night");
// } else {
//     alert("Invalid time");
// }
// Chap 14 & 16
// Arrays
// Ques1 & Ques2
// var studentNames1 = [];
// var studentNames2 = new Array();
// alert("Empty arrys created.");
// Ques3
// var strings = ["Apple", "Banana", "Cherry"];
// alert("String Arrayc: " + strings); 
// Ques4
// var numbers = [10, 20, 30];
// alert("Numbers Array: " + numbers);
//  Ques5
// var booleans = [true, false, true];
// alert("Boolean Array: " + booleans);
// Ques6
// var mixed = ["Hello", 123, true];
// alert("Mixed Array: " + mixed);
// Ques7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h3>Qualifications in Pakistan:</h3>");
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");
// Ques8
// var students = ["Dushant", "M.atta", "John"];
// var scores = [400, 450, 480];
// var total = 500;
// for (var i = 0; i < students.length; i++) {
//   var percent = (scores[i] / total) * 100;
//   document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percent + "%<br>");
// }
// Ques9
// var colors = ["Red", "Green", "Blue"];
// alert("Colors: " + colors);

// // a
// var colorStart = prompt("Enter color to add at beginning");
// colors.unshift(colorStart);
// alert("After adding at start: " + colors);

// // b
// var colorEnd = prompt("Enter color to add at end");
// colors.push(colorEnd);
// alert("After adding at end: " + colors);

// //  c
// colors.unshift("Purple", "Pink");
// alert("After adding 2 at start: " + colors);

// // d
// colors.shift();
// alert("After removing first: " + colors);

// // e
// colors.pop();
// alert("After removing last: " + colors);

// // f
// var indexAdd = +prompt("Enter index to add color");
// var colorAtIndex = prompt("Enter color name");
// colors.splice(indexAdd, 0, colorAtIndex);
// alert("After adding at index: " + colors);

// // g
// var indexDel = +prompt("Enter index to delete color(s)");
// var countDel = +prompt("Enter how many colors to delete");
// colors.splice(indexDel, countDel);
// alert("After deleting at index: " + colors);
// Ques10
// var scores = [320, 230, 480, 120];
// scores.sort(function(a, b) { return a - b});
// alert("Sorted scores: " + scores);
// Ques11
// var cities = ["Karachi", "Lahore", "Islamabad","Quetta", "Peshawar"];
// var selectedCities = cities.slice(0, 3);
// alert("Selected cities: " + selectedCities);
// Ques12
// var arr = [" This ", " is ", " my ", " cat "];
// var result = arr.join("");
// alert(result);
// Ques13
// var queue = [];
// queue.push("First");
// queue.push("Second");
// queue.push("Third");

// alert(queue.shift());
// alert(queue.shift());
// alert(queue.shift());

// Ques14
// var stack = [];
// stack.push("First");
// stack.push("Second");
// stack.push("Third");

// alert(stack.pop());
// alert(stack.pop());
// alert(stack.pop());

// Ques15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>Phone Manufacturers:</h3><select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");