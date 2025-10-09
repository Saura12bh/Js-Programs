function clrField() {
  document.getElementById("t1").value = "";
  document.getElementById("t1").focus();
}
function checkEmptyfield() {
  if (document.getElementById("t1").value === "") {
    document.getElementById("t1").focus();
    Swal.fire("Enter a input please");
  }
}
function StringOperation(type) {
  let inp = document.getElementById("t1").value;
  let opt = "";
  let ado = document.getElementById("ado");
  switch (type) {
    case "clr":
      clrField();
      break;
    case "up":
      checkEmptyfield();
      opt = inp.toUpperCase();
      break;
    case "trim":
      checkEmptyfield();
      opt = inp.trim();
      break;
    case "strim":
      checkEmptyfield();
      opt = inp.trimStart();
      break;
    case "etrim":
      checkEmptyfield();
      opt = inp.trimEnd();
      break;
  }
  document.getElementById("res").value = opt;
  let ad = document.getElementById("ado");
  ad.currentTime = 0;
  ad.play();
}
