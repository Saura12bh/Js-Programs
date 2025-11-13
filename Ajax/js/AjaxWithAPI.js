document.getElementById("btn").addEventListener("click", getData);
let ti = document.getElementById("title");
let bd = document.getElementById("body");

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users?id=1", true);
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.status === 200) {
      ti.innerText = xhr.response.name;
      bd.innerText = xhr.response.id;
    }
  };
  xhr.send();
}
