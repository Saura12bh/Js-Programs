let cn = 0;
function cnt() {
  cn = cn + 1;
  document.getElementById("res").value = cn;
}
function cnt1() {
  cn = cn - 1;
  document.getElementById("res").value = cn;
}
document.getElementById("btn1").addEventListener("click", cnt);
document.getElementById("btn2").addEventListener("click", cnt1);

//input chya mhnje form chya field sobt fkt value kam krt value set krayla

// 5. Live Character Counter
// Task: Show how many characters have been typed in a text box.

// After typing in textbox

function charCnt() {
  var len = document.getElementById("textBox").value.length;
  document.getElementById("charCount").textContent = "charater =>" + len;
}
document.getElementById("textBox").addEventListener("input", charCnt);
