document.getElementById("btn").addEventListener("click", getData);
var p = document.getElementById("p1");

function getData() {
  xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.response);
        p.innerText = xhr.response;
      }
    }
  };
  xhr.send();
}
