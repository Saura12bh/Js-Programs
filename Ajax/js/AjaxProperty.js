document.getElementById("btn").addEventListener("click", getData);
var p = document.getElementById("p1");

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  xhr.responseType = "text";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.responseText);
        console.log(xhr.response);
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseURL);
        console.log(xhr.responseType);
        p.innerText = xhr.responseText;
      }
    }
  };
  xhr.send();
}
