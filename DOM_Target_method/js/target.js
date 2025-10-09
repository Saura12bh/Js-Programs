// //how to target element
// //this method use for how many element we use in html page
// var ele = document.all;
// console.log(ele);

// //how many links are we use
// var li = document.links;
// console.log(li);

// //how many images we use
// var i = document.images;
// console.log(i);

// //how to find path
// var p = document.URL;
// console.log(p);

// //how to we can set or get attribute of elements
// /* methods->
// for getter->
// 1-innerText-display the of element mhnje element madhla data display krt
// 2-innerHtml-display the element -html cha code display krt
// 3-getAttribute- when we want only one attrube jeva yekch attribe lagat asto
// 4-attribues-jeva multipal attribues pahije astya

// for Setter->
// 1-innerText-display the of element mhnje element madhla data display krt
// 2-innerHtml-display the element -html cha code display krt
// 3-SetAttribute- when we want only one attrube jeva yekch attribe lagat asto
// 4-attribues-jeva multipal attribues pahije astya

// //1-getElementbyid 2-getElementByclassName 3-getElementbytagName
// */
// //to select header
// var h = document.all[9];
// console.log(h);
// //or
// var h = document.getElementById("head");
// console.log(h);
// var h = document.getElementById("head").innerText;
// console.log(h);
// var h = document.getElementById("head").innerHTML;
// console.log(h);

// var t = document.getElementsByClassName(".box");
// console.log(t);

// var t = document.getElementsByTagName("ul");
// console.log(t);

// var t = document.getElementById("list").innerHTML;
// console.log(t);
//innerhtml and innertext always work with  id

//1->getAttribues
// var at = document.getElementById("head").getAttribute("head");
// console.log(at);

//head la value set kraychi ahe byte code =>Empty Mind
// let e = (document.getElementById("head").innerText = "Empty Mind");
// console.log(e);
//5 sec nantr disl pahije
//frist way->1
/*setTimeout(() => {
  let e = (document.getElementById("head").innerText = "Empty Mind");
  console.log(e);
}, 5000);
//2nc way
setTimeout(() => {
  let e1 = (document.getElementById("head").innerHTML = "<h1>Om Sai </h1>");
  console.log(e1);
}, 5000);
*/

//jr aplyala new attribute mhnje ch class kiva id add kraycha asel tr aplya kde setAttribute("class,id","nameOfClass/id");
//ya madhla class apn custome pn lihu shkto kiva bs che class pn use kru shkto
// setTimeout(() => {
//   document.getElementById("p").setAttribute("class", "para");
// }, 2000);

//removeAttribute("attributename")->yani attribute remove hot

//DOM IN JS

/* 1->QuerySelector->select the first match of id,class 
   2->QuerySelector->select all match of same id ,class
   
   apn innerText ,innerHtml kiva textContent method use krto data pahayla element madhla*/
//1 way using id with innerHtml
// var e = document.querySelector("#p").innerHTML;
// console.log(e);
// //2 way using class with innnerText
// var el = document.querySelector("#head").innerText;
// console.log(el);
// //3 way using class with textContent
// var ele = document.querySelector(".head").textContent;
// console.log(ele);

// //2->QuerySelectorAll
// var q = document.querySelectorAll(".box");
// q.forEach((q) => {
//   console.log(q.innerText);
// });

//DOM CSS Styling
/* 1-style ->we can apply style on particular id,class
  2-className ->we  can use customer and bs class direct use kru shkto multipal class jr multipal class use krayche astil apn tyancya madhe space use krto
  3-classList->yacha use apn add ani remove styling krayla use krto ani jast use krayche astil tr , use kraycha yethe
  
  IMP=> he apn all selector sobt pn use kru shkto
  */
//1-style
// document.querySelector("#head").style.border = "3px solid black";
// setTimeout(() => {
//   document.querySelector("#head").style.border = "3px solid red";
// }, 4000);
// document.getElementById("head").style.backgroundColor = "lightgrey";

//2->className
// setTimeout(() => {
//   document.querySelector(".head").className = "para";
// }, 5000);

//btn 5 sec disl pahije
//none mhnje dist nahi ani blcok mhnje disto
// document.querySelector("#btn").style.display = "none";
// setTimeout(() => {
//   document.querySelector("#btn").style.display = "block";
// }, 5000);

//3-classList
// setTimeout(() => {
//   document.querySelector("#btn").classList.add("para", "stbtn");
// }, 5000);
/* class kde 5 method ahe
1-add->for adding new classes
2-remove->remove class
3-conatins->check class is present in classList if yes then true return on console othervice return false
4-length-find the how many class are present in classList
5-toggle->we can change one stage to another stage like on to off
*/
