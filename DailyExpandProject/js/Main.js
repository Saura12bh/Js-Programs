function clearFields() {
  const ids = [
    "username",
    "useremail",
    "userpass",
    "userpass1",
    "usermob",
    "conname",
    "conemail",
    "conmob",
    "conmsg",
    "edate",
    "ename",
    "edis",
    "eamt",
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = ""; // clear safely if the element exists
  });

  // set focus to email input if available
  const emailField = document.getElementById("useremail");
  if (emailField) emailField.focus();
  const cname = document.getElementById("conname");
  if (cname) cname.focus();
  const ed = document.getElementById("edate");
  if (ed) ed.focus();
}

function validateFields() {
  const ids = [
    "username",
    "useremail",
    "userpass",
    "userpass1",
    "usermob",
    "conname",
    "conemail",
    "conmob",
    "conmsg",
  ];

  for (let id of ids) {
    const el = document.getElementById(id);
    if (el && el.value.trim() === "") {
      el.focus();
      Swal.fire("Please fill all required fields before continuing!");

      return false; // stop execution
    }
  }
  return true;
}

// Function to switch sections dynamically
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec) => sec.classList.add("d-none"));
  document.getElementById(sectionId).classList.remove("d-none");
}

//register user
function saveUserData() {
  // Call validation first
  if (!validateFields()) return;

  // Get all input field values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("useremail").value.trim();
  const mobile = document.getElementById("usermob").value.trim();
  const pass = document.getElementById("userpass").value.trim();
  const cpass = document.getElementById("userpass1").value.trim();

  // Check if passwords match
  if (pass !== cpass) {
    Swal.fire("Passwords do not match!");
    return;
  }

  // Get existing users from localStorage (if any)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const existingUser = users.find((u) => u.useremail === email);
  if (existingUser) {
    Swal.fire("User with this email already exists!");
    return;
  }

  // Create new user object
  const newUser = {
    username: username,
    useremail: email,
    usermobile: mobile,
    userpass: pass,
  };

  // Add to users array and save back to localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  Swal.fire({
    title: "Registration Successful!",
    text: "Your data has been saved.",
    icon: "success",
    confirmButtonText: "OK",
  });
  Swal.fire({
    title: "Registration Successful!",
    text: "Your data has been saved.",
    icon: "success",
    confirmButtonText: "Go to Login ",
  }).then(() => {
    // Redirect to dashboard page
    window.location.href = "login.html";
  });

  clearFields();
}

//login form
function loginUser() {
  // Check if fields are empty
  if (!validateFields()) return;

  // Get input values
  const email = document.getElementById("useremail").value.trim();
  const password = document.getElementById("userpass").value.trim();

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user exists
  const user = users.find(
    (u) => u.useremail === email && u.userpass === password
  );

  if (user) {
    // Save current user in localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Remove focus to prevent warnings
    document.activeElement.blur();

    Swal.fire({
      title: "Login Successful!",
      text: `Welcome back, ${user.username}!`,
      icon: "success",
      confirmButtonText: "Go to Dashboard",
    }).then(() => {
      window.location.href = "DailyExpand.html";
    });
  } else {
    Swal.fire({
      title: "Login Failed!",
      text: "Invalid email or password.",
      icon: "error",
    });
  }
}

function logoutUser() {
  // Remove current user from localStorage
  localStorage.removeItem("currentUser");

  // Redirect to login page
  window.location.href = "Login.html";
}

//save the form data in local storage
function saveExpenditure() {
  // Get form field values
  const date = document.getElementById("edate").value.trim();
  const name = document.getElementById("ename").value.trim();
  const desc = document.getElementById("edis").value.trim();
  const category = document.getElementById("ecat").value.trim();
  const amount = document.getElementById("eamt").value.trim();

  // Validate expenditure fields
  if (!date || !name || !desc || !amount || category === "Select Category") {
    Swal.fire("⚠️ Please fill all expenditure fields!");
    return;
  }

  // Create expenditure record
  const newExpense = {
    id: Date.now(),
    date,
    name,
    desc,
    category,
    amount: parseFloat(amount),
  };

  // Fetch existing records
  let expenses = JSON.parse(localStorage.getItem("expenditures")) || [];

  // Add new record
  expenses.push(newExpense);

  // Save to localStorage
  localStorage.setItem("expenditures", JSON.stringify(expenses));

  // Success alert
  Swal.fire({
    icon: "success",
    title: "Saved!",
    text: "Expenditure added successfully.",
  });

  clearFields();
}

//display data and perform operations on it
// Show expenditures in table dynamically
function displayExpenditures() {
  showSection("displayData"); // Show table section

  const tbody = document.querySelector("#displayData tbody");
  tbody.innerHTML = ""; // Clear old rows

  let expenses = JSON.parse(localStorage.getItem("expenditures")) || [];

  expenses.forEach((exp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${exp.date}</td>
      <td>${exp.amount}</td>
      <td>${exp.category}</td>
      <td>${exp.desc}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editExpenditure(${exp.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteExpenditure(${exp.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Delete a particular expenditure
function deleteExpenditure(id) {
  let expenses = JSON.parse(localStorage.getItem("expenditures")) || [];
  expenses = expenses.filter((exp) => exp.id !== id); // Remove the selected row
  localStorage.setItem("expenditures", JSON.stringify(expenses));
  displayExpenditures(); // Refresh table
  Swal.fire({
    icon: "success",
    title: "Deleted!",
    text: "Expenditure deleted successfully.",
  });
}

// Edit a particular expenditure
function editExpenditure(id) {
  let expenses = JSON.parse(localStorage.getItem("expenditures")) || [];
  const exp = expenses.find((e) => e.id === id);

  if (!exp) return;

  // Fill the add form with selected row data
  document.getElementById("edate").value = exp.date;
  document.getElementById("ename").value = exp.name;
  document.getElementById("edis").value = exp.desc;
  document.getElementById("ecat").value = exp.category;
  document.getElementById("eamt").value = exp.amount;

  // Change Submit button to Update
  const submitBtn = document.querySelector(
    "#addForm a.btn-outline-primary.me-5"
  );
  submitBtn.textContent = "Update";
  submitBtn.onclick = function () {
    updateExpenditure(id);
  };

  // Show Add Form
  showSection("addForm");
}

// Update expenditure after editing
function updateExpenditure(id) {
  let expenses = JSON.parse(localStorage.getItem("expenditures")) || [];
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return;

  expenses[index] = {
    id,
    date: document.getElementById("edate").value.trim(),
    name: document.getElementById("ename").value.trim(),
    desc: document.getElementById("edis").value.trim(),
    category: document.getElementById("ecat").value.trim(),
    amount: parseFloat(document.getElementById("eamt").value.trim()),
  };

  localStorage.setItem("expenditures", JSON.stringify(expenses));

  Swal.fire({
    icon: "success",
    title: "Updated!",
    text: "Expenditure updated successfully.",
  });

  clearFields();

  // Restore Submit button to original
  const submitBtn = document.querySelector(
    "#addForm a.btn-outline-primary.me-5"
  );
  submitBtn.textContent = "Submit";
  submitBtn.onclick = saveExpenditure;

  displayExpenditures(); // Show updated table
}
