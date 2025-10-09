function clearField() {
  document.getElementById("num1").value = "";
  document.getElementById("num1").style.borderColor = "black";
  document.getElementById("num2").value = "";
  document.getElementById("num2").style.borderColor = "black";
  document.getElementById("operation").value = "select"; //select hi value dili 1st option la  clr kelya vr ti value select zali pahije
  document.getElementById("operation").style.borderColor = "black";
  document.getElementById("res").value = "";
}
document.getElementById("btn-clr").addEventListener("click", clearField);
//add event madhe function calling chya veli () deyche nahi

//he function jeva page load hoyl teva cursor ni num1 vr hight light kel pahije ya sathi he function apn hmtl chya body tag madhe add krto onload event vr
function loadCursor() {
  document.getElementById("num1").focus();
}

//validations -> jr apn konta pn text box empty takla tr tyani msg display kela pahije ya sathi apn khal ch function lihtitoy jr apn do task vr complet kel tr tyani msg dispaly kela pahije
function checkEmptyField() {
  if (document.getElementById("num1").value === "") {
    document.getElementById("num1").focus();
    //alert("please enter first number"); ha thoda odd alert ahe apn new sweetalert vrun new alert box add krtoy
    Swal.fire("Please Enter First Number");
  } else if (document.getElementById("num2").value === "") {
    document.getElementById("num2").focus();
    Swal.fire("Please Enter Second  Number");
  } else if (document.getElementById("operation").value === "select") {
    document.getElementById("operation").focus();
    Swal.fire("Please select at list one operation");
  }
}
//document.getElementById("btn-task").addEventListener("click", checkEmptyField);

function doTask() {
  checkEmptyField();
  const t1 = document.getElementById("num1").value;
  const t2 = document.getElementById("num2").value;
  const op = document.getElementById("operation").value;
  switch (op) {
    case "+":
      var res = parseInt(t1) + parseInt(t2);
      document.getElementById("res").value = res.toString();
      break;

    case "-":
      var res = parseInt(t1) - parseInt(t2);
      document.getElementById("res").value = res.toString();
      break;
    case "*":
      var res = parseInt(t1) * parseInt(t2);
      document.getElementById("res").value = res.toString();
      break;
    case "/":
      try {
        var res = parseInt(t1) / parseInt(t2);
        document.getElementById("res").value = res.toString();
        break;
      } catch (error) {
        console.error(error);
      }
      break;
  }
}
document.getElementById("btn-task").addEventListener("click", doTask);

//jr field empty sodli tr border cha clr red zala pahije
document.getElementById("num1").addEventListener("input", () => {
  if (document.getElementById("num1").value === "") {
    document.getElementById("num1").style.borderColor = "2px solid red";
  } else {
    document.getElementById("num1").style.borderColor = "black";
  }
});
document.getElementById("num2").addEventListener("input", () => {
  if (document.getElementById("num2").value === "") {
    document.getElementById("num2").style.borderColor = "2px solid red";
  } else {
    document.getElementById("num2").style.borderColor = "black";
  }
});
document.getElementById("select").addEventListener("input", () => {
  if (document.getElementById("select").value === "") {
    document.getElementById("select").style.borderColor = "2px solid red";
  } else {
    document.getElementById("select").style.borderColor = "black";
  }
});
document.getElementById("operation").addEventListener("change", () => {
  if (document.getElementById("operation").value === "select") {
    document.getElementById("operation").style.outline = "none";
  } else {
    document.getElementById("operation").style.outline = "none";
    document.getElementById("operation").style.borderColor = "3px solid black";
  }
});
