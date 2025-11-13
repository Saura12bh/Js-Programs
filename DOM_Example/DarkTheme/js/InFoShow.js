//name navachya text box madhli value n1 la dili
var n1 = document.getElementById("name");
//name1 mhnje jithe aplya name chi value display kraychi ahe to assign kela
var n2 = document.getElementById("name1");

var e1 = document.getElementById("email");
var e2 = document.getElementById("email1");

var c1 = document.getElementById("city");
var c2 = document.getElementById("city1");

//yethe n1 vr input navacha event call kryacha => ni
n1.addEventListener("input", () => {
  //ji n1 madhli value n2 madhe assigen keli textContent display
  n2.textContent = n1.value;
});
e1.addEventListener("input", () => {
  e2.textContent = e1.value;
});
c1.addEventListener("input", () => {
  c2.textContent = c1.value;
});
