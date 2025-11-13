//defination-higher order functions are function which take argument as another function
//It it return function as result
function display(name) {
  //call back function
  console.log("hii ", name);
}

function displayCourse(callback) {
  //mhnje varchya function madhl je name ahe te
  //higher order function
  let cname = "java";
  console.log(callback(cname));
}
displayCourse(display);

//another example
function x() {
  //callback function
  console.log("om sai ram");
}
function y(callback) {
  //callback mhnje vrch function
  //higher order function
  x();
}
y(x);

//3rd example ->radius ch array gheycha ani tyanche radius ,parimter ani circumferance print

const r = [1, 2, 3, 4];

//all these are call back functions
const area = function (r) {
  return Math.PI * r * r;
};
const cir = function (r) {
  return 2 * Math.PI * r;
};
const dia = function (r) {
  return 2 * r;
};

const calculate = function (r, callback) {
  //higher order function
  const op = []; //result store

  for (let i = 0; i < r.length; i++) {
    op.push(callback(r[i]));
  }
  return op;
};

console.log("Area =>", calculate(r, area)); //araray ani
console.log("Circumference =>", calculate(r, cir));
console.log("Diameter  =>", calculate(r, dia));

//Inbuilt higher order functions
/*1 -map->visit each element of array and perform operation it or tranform each value of array and return new array
2-filter ->filter method is used for the filter the value inside the array eg->odd even grater than 4
3-Reduce ->it used for when we want to perform operation on all value and generate one resule eg->sum,large no ,small no
4- some ->at least one elemrnt satisfy conditon true zali pahije tr ch return true krt
5-Every -> all element ni condtion true keli pahije nahi keli tr true nahi tr false  
6-SetTimeout()   7-setInterval() 8-forEach  */

//Map
const a = [1, 2, 3, 4, 5];
//1 all element double krayche
function double(a) {
  return a * 2;
}
const op = a.map(double);
console.log(op);

//2 all value binary zalya pahije

const op1 = a.map(function bi(a) {
  return a.toString(2);
});
console.log(op1);

//3 all value tripal
const op2 = a.map((n) => {
  return n * 3;
});
console.log(op2);
//short cut
const o = a.map((a) => a * 3);
console.log(o);

//filter function
//1 even no
const o2 = a.filter((n) => n % 2 == 0);
console.log(o2);

//2 odd no
const o3 = a.filter((n) => n % 2 != 0);
console.log(o3);

//grater  then 3
const o4 = a.filter((n) => n >= 4);
console.log(o4);

//reduce
//sum of all element
const o5 = a.reduce(function (sum, n) {
  sum = sum + n;
  return sum;
}, 0);
console.log(o5);

//max no
const o6 = a.reduce(function (max, n) {
  if (n > max) {
    max = n;
  }
  return max;
}, 0);
console.log(o6);

//multiplication of all no
const o7 = a.reduce(function (mul, n) {
  mul = mul * n;
  return mul;
}, 1);
console.log(o7);

//some
const o8 = a.some((n) => {
  return n % 2 === 0;
});
console.log(o8);

//Every
const o9 = a.every((n) => {
  return n % 2 === 0;
});
console.log(o8);

//call backhell
/*
defination-In one function we call another call back function,in another call back function we can aonter call back..so on
call back working in synchronized manner mean it perform operation serialy so if one function having function other are be stop beaz the are depend on each other
 */
function bakeCake(callback) {
  console.log("making the cake");
  setTimeout(() => {
    console.log("cake is ready now...");
    callback();
  }, 3000);
}
function dec() {
  console.log("Nowcake is ready");
}

bakeCake(dec);

//example 2
function boilwater(callback) {
  setTimeout(() => {
    console.log("water boiling");
  }, 400);
}
function maketTea(callback) {
  setTimeout(() => {
    console.log("making tea");
  }, 400);
}
function makeToest(callback) {
  setTimeout(() => {
    console.log("making a toest");
  }, 400);
}
function serve(callback) {
  setTimeout(() => {
    console.log("serving break fast");
  }, 400);
}

//calling function

//ya function calling la pyramid of DOM mhntya ch mhnje call back hell
boilwater(() => {
  maketTea(() => {
    makeToest(() => {
      serve(() => {
        console.log("done break fast");
      });
    });
  });
});
