//1-createElement('p') jr aplya yekhada element tyar kraycha asel tr apn ya method cha use krto
//let p = document.createElement("p");
//console.log(p);

//he as kel tr fkt console vr ch element tyar hoto
//2- createTextNode ya method cha use krun apn jo element tyar kela ahe tyat data taku shkto
// let p = document.createElement("p");
// let text = (p.createTextNode = "om Sai ram");
// console.log(p);
// console.log(text);

//another way to write content

// let p = document.createElement("p");
// let text = (p.createTextNode = "om Sai ram");
// p.textContent = "Om Sai Ram";
// console.log(p);
//3- appendChild -> ya method cha use krun apn page chya last la element insert kru shkto
// let p = document.createElement("p");
// let text = document.createTextNode("om Sai ram");
// p.appendChild(text);

// // //aplya jya madhe insert kraych ahe tya tya id use krun tyat insert kraych
// let adp = document.getElementById("box");
// adp.appendChild(p);

//after 5 sec p tag with conent add
// let p = document.createElement("p");
// console.log(typeof p);
// let text = document.createTextNode("Om sai ram");
// // let text = document.createTextNode("Om sai ram");
// p.appendChild(text);
// setTimeout(() => {
//   let adp = document.getElementById("box");
//   adp.appendChild(p);
// }, 2000);

//create web page in which add one heading apply style on heading and paragraph and one inbult paraghraph
/*
let p = document.createElement("p");
let head = document.createElement("h1");
let h = document.createTextNode("Hello");
p.setAttribute("class", "heading");
let text = document.createTextNode("Om sai ram");
p.appendChild(text);
head.appendChild(h);
setTimeout(() => {
  let adp = document.getElementById("box");
  adp.appendChild(head);
  adp.appendChild(p);
}, 2000);  */

//prb asa ahe ki jeva apn append krto element teva to last la add hot default tr to aplya start kiva kochyaadhi anaycha asel tr first tyache child find kraychr tya insetBefore method cha use krayhcha tyacha 1 st paramter as konala insert kraych to ani 2nd konachya adhi insert kraych te
let p = document.createElement("p");
let head = document.createElement("h1");
let h = document.createTextNode("Hello");
p.setAttribute("class", "heading");
let text = document.createTextNode("Om sai ram");
p.appendChild(text);
head.appendChild(h);
setTimeout(() => {
  let adp = document.getElementById("box");
  adp.appendChild(p);
  //apn check krto kib box la kiti child ahe ani kontya child chya adhi ha element add kraycha ahe
  //   let boxch = document.getElementById("box").children;
  //   console.log(boxch);
  let boxch = document.getElementById("box").children[0];
  adp.insertBefore(head, boxch);
}, 2000);
