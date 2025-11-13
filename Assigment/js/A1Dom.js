/*1. Change Text on Button Click
Task: Change the text inside a <p> tag when a button is clicked.
Output
*/
// 1-way we direct call using html lister
// function btnClick() {
//   //   var e = (document.getElementById("btn").innerText = "leran more");
//   document.getElementById("btn").textContent = "Learn more";
// }
//2 way using direct js
function btnClick() {
  document.getElementById("btn").innerText = "heee";
}
document.getElementById("btn").addEventListener("click", btnClick);

//2. Change Background Color
// Task: Change the background color of the page when a button is clicked.
function btnChBack() {
  document.getElementById("body").style.backgroundColor = "green";
}
document.getElementById("btn").addEventListener("click", btnChBack);

// 3. Show/Hide Password
// Task: Toggle visibility of a password field.

function pass() {
  var p = document.getElementById("password").value;
  document.getElementById("show").innerText = p;
}
document.getElementById("show").addEventListener("click", pass);
