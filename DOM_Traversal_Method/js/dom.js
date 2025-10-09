//1-parentElement
//ya method ni child cha use krun parent target kru shkto
/**
Returns the parent element of a given element — but only if the parent is an HTMLElement.
If the parent is not an element (like document), it will return null.
 */
// var t = document.getElementById("inner").parentElement;
// console.log(t);
// var t1 = document.getElementById("outer").parentElement;
// console.log(t1);
//outer cha use krun body la pink clr lavaycha ahe
/*setTimeout(() => {
  var t = (document.getElementById(
    "outer"
  ).parentElement.style.backgroundColor = "pink");
}, 5000);
*/
//2-parentNode
//parent node pn parentElment sarkhach ahe child cha use krun parent larget kraycha
/* 
parentNode
Returns the parent node of a given element — that parent can be any type of node, not just an element (for example, it could be a Document or a DocumentFragment).
It exists for all nodes, not only HTML elements.
jr apn body cha parent node pahila tr document yeto pn parentelement madhe null display krt
*/
//var t1 = document.getElementById("outer").parentNode;
//console.log(t1);

/* 3->children -- apn check kru shtko particular element,id ,class la kiti child ahe ani he return array krt jevdhe child astil tevdhe apn tya child chya index ni tya target kru skto*/
//inner la jevdhe child astil te distil 0-h2 1-box apn
// var t = document.getElementById("inner").children;
// console.log(t);
// apn atta h2 la target kru varchya method cha use krun
/*setTimeout(() => {
  var t = (document.getElementById("inner").children[0].style.backgroundColor =
    "pink");
}, 5000); */

/* 4->childNotes--same as children pn ya madhe array return krto pn apn jr enter kel asel tri pn to tyala child samjto ani text mhnun print krto ya madhe comment ,enter(new line) sagle as child count krto
var t = document.getElementById("inner").childNodes;
console.log(t);
op->NodeList(5) [text, h2, text, div.boxes, text]
*/
/*  5->first child-- parent cha first child select krnya sathi krto
 6->lastchild--last cha child select krnya sathi
 7->nth child --particular madhla jr child selet kraycha asel tr 
var t = document.getElementById("outer").firstChild;
console.log(t);
var t1 = document.getElementById("outer").lastChild;
console.log(t1);
var outer = document.getElementById("outer");
var t2 = outer.children[1];
console.log("2nd Child Element:", t2); */

/* sibling--mhnje side che box  as sibling comment ,tag sagl gheto
   8-nextSibling->mhnje next vala box
   9-prioussibling mhnje magcha box
var t = document.getElementById("outer").nextSibling;
console.log(t);
var t1 = document.getElementById("outer").previousSibling;
console.log(t1);  */
/*
10-nextElementsibling->ya madhe fkt html che tag deside krun sibling hoty
11-priousElementSibling->magcha*/
var t1 = document.getElementById("inner").previousElementSibling;
console.log(t1);
var t2 = document.getElementById("inner").nextElementSibling;
console.log(t2);
