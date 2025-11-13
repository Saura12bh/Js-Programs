/* 
Promise in js
A Promise is an object that represents the result of an asynchronous operation.
It allow to perform or handle asynchronus task more effetivily and replace  older method(call back hell)

promise ha js madhala yek object ahe represent krto aysnchronous operation 

A Promise is used to handle asynchronous tasks like fetching data, file loading, or API calls.
promise apn used krto asysnchrnou task handle kryala jse ki fetching data,file ,load or API calls

promise is mainly used for fetching API data

their are 3 stages of promise 
1->Pending – The initial state (operation not completed yet) means nither fulfilled
2->Resolved (Fulfilled) – The operation completed successfully and result value is aviable
3->Rejected – The operation failed  and reason for the failure is aviable

let promise = new Promise((resolve, reject) => {  
    //he 2 paramter compalrsary ahe jr use kraych nsel tr _ uesed kraych  resolve->sucess rejevt->error

  // some async operation   here promise work as construtor  
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});

how to use promise 
promise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
 .finally(()=>{
    console.log("done");
    });

*/
//example

const p1 = new Promise((resolve, reject) => {
  var datapresent = true;
  if (datapresent == true) {
    resolve("Data is present");
  } else {
    reject("Data is not present");
  }
});

//calling or use promise
//then madhe data ani catch madhe error samech thevaych
p1.then((data) => {
  console.log(data);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("done");
  });

//example of odd even
const p2 = new Promise((resolve, reject) => {
  var no = 4;
  if (no % 2 === 0) {
    resolve("number is even");
  } else {
    reject("number is odd");
  }
});

p2.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

//using  timing function
const p3 = new Promise((resolve, reject) => {
  var no = 4;
  console.log("calculation in processing");
  if (no % 2 === 0) {
    setTimeout(() => {
      resolve("number is even");
    }, 4000);
  } else {
    reject("number is odd");
  }
});

p3.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

//Advaance method of Promice
/* 
1-promice.all();
    it will execute all the promice.if any one is reject then result  rejected promice data is print
    he method input as array gheti karan multipal promice gheyche ahe mhnun

2-promice.allSetled();
    this will wait to complete the all promice wether it will sucess or reject it return all promise status 
    result in the form of array ani yacha input type pn array ahe
  
3-promice.race();
  It return first promice that is settles mhnje ch 1st promice je resolve zalel ahe
  Race ha concept timing vr depend age 
  input type as array gheto return jo resolve zala tyala print krto

4-promice.any();
  It return the first fullfill promise mhnje jo 1st solve zala to yat time concept nst

Note->jr sagle promice reject astil tr yeto yeto =>aggrigateError
*/

//1-proimce.all();
const pp1 = Promise.resolve("Promice pp1");
const pp2 = Promise.resolve("Promice pp2");
const pp3 = Promise.reject("Promice pp3");
const pp4 = Promise.resolve("Promice pp4");

Promise.all([pp1, pp2, pp3, pp4])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.allSettled([pp1, pp2, pp3, pp4])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.race([pp1, pp2, pp3, pp4])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.any([pp1, pp2, pp3, pp4])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
calculation in processing
Data is present
number is even
(4) [{…}, {…}, {…}, {…}]
0: {status: 'fulfilled', value: 'Promice pp1'}
1: {status: 'fulfilled', value: 'Promice pp2'}
2: {status: 'rejected', reason: 'Promice pp3'}
3: {status: 'fulfilled', value: 'Promice pp4'}
length: 4[[Prototype]]: Array(0)
 Promice pp1
Promice pp1
 done
 Promice pp3
 number is even

   */

//Promice chaining
/*
Promise Chaining means calling multiple .then() methods one after another,
where each .then() returns a value or another promise that the next .then() can use.

Promise chaining म्हणजे एका .then() नंतर दुसरा .then() असे एकामागून एक promise वापरणे.
प्रत्येक .then() काहीतरी value return करतो आणि पुढचा .then() ती value वापरतो. 

Advantage ->It help us to avoid callback hell

  Example->
  1->fetch user data form API
  2->get user order
  3-get users total
*/

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data fetching...");
      resolve({ id: 1, name: "Ajay" });
    }, 1000);
  });
}

function getOrder(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("order data processing");
      resolve(["watch", "mobile", "shoes"]);
    }, 1000);
  });
}
function getTotal(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("geting user total amount");
      resolve(order.length * 100);
    }, 1000);
  });
}

//use promice chain

getUser()
  .then((user) => getOrder(user)) // Step 1: pass user to getOrder()
  .then((order) => getTotal(order)) // Step 2: pass order to getTotal()
  .then((total) => {
    // Step 3: print result
    console.log("Total amount =", total);
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  });

//disadvantage ->jr madhlya kontya pn function madhe error ala tr sagle stop hotya

//note->new promice(resolve,reject) he complasary ahe jr yek jri use kraych nsel _ use kraych
