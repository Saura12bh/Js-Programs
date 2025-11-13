/*
async and await

In js async and await use to handle asynchronus operations in clean,readable way to solve promice chaining
They make asynchronous code look and behave more like synchronus code

key componet
1->async  
    declare function as async
    asynch function always return promice
    jr aplya await use kryahcha asel tr compalsary function aplyala async declare krayla lagt

2-await 
    it pause the execution of async function until the promise is resolved or reject 
    it only used inside the async function

Note->async and await always try and catch madhe ch lihaycha

advtange
1-simple code
2-faster to read and easy to maintain
3-easy ti error handling using try catch

Limitions
1-required modern browser and node 7.0+ version required
2-must always used with promice and asynch function

*/

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data fetching ...");
      resolve({ id: 1, name: "sai" });
    }, 1000);
  });
}
function getOrder(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user order fetching");
      resolve(["phone", "laptop", "shoes"]);
    }, 1000);
  });
}
function getTotal(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("total amoount calculating");
      resolve(order.length * 100);
    }, 1000);
  });
}

//use async and await
async function processDetails() {
  try {
    const user = await getUser();
    const order = await getOrder(user);
    const total = await getTotal(order);
    console.log("total amount =", total);
  } catch (error) {
    console.error(error);
  }
}

//calling function
processDetails();
