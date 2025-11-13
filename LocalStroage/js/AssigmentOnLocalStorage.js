//1 to save data in local storage
function saveUser() {
  //he as kel tr fkt yekch data store hoto ani apn jr dusra add kela tr ti first value overide houn loss hoti tya mul apn array of object use krto
  //   const emp = { id: 1, name: "A", age: 12 };

  let emp = [
    { id: 1, name: "A", age: 24 },
    { id: 2, name: "B", age: 22 },
    { id: 3, name: "C", age: 23 },
  ];

  //   localStorage.setItem("user", emp);
  //he as kel tr data save hot nahi karn local data key value formate madhe ani string data type madhe save hoto tya mul aplya yethe JSON.strngify() cha use krun apn data save krto
  localStorage.setItem("user", JSON.stringify(emp));
  //ya madhe user->key ahe ani emp as value ahe

  //printing data form local storage
  //1->data print zala as strig formate madhe console vr
  const data = localStorage.getItem("user");
  console.log(data);

  //2->jr aplya data Array  formate madhe pahije asel tr aplya to JSON madhe convert krayla lagto using JSON.parse("user")
  let d = JSON.parse(data);
  console.log(d);
}
// Remove a Specific User by ID
function removeUserById(id) {
  const data = localStorage.getItem("user");
  if (!data) {
    console.log("⚠️ No data to remove.");
    return;
  }

  let users = JSON.parse(data);
  users = users.filter((u) => u.id !== id); // remove user with given id
  localStorage.setItem("user", JSON.stringify(users));

  console.log(`🗑️ User with ID ${id} removed successfully.`);
}

// Clear Entire Local Storage
function clearAll() {
  localStorage.clear();
  console.log("🧹 All data cleared from localStorage.");
}
saveUser();
removeUserById(2);
//khalch function call kel tr all data clr hoto so cmt kel ahe
//clearAll();
