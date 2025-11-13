document.getElementById("btn").addEventListener("click", getData);
var p = document.getElementById("p1");

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.responseType = "text";

  // 🔹 When the request starts
  xhr.onloadstart = () => {
    console.log("✅ Function started");
  };

  // 🔹 When request is in progress (downloading)
  xhr.onprogress = (e) => {
    console.log("📦 Data loading...");
    console.log("Loaded:", e.loaded);
    console.log("Total (if known):", e.total);
  };

  // 🔹 When the response is successfully received
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("🎉 Request successful!");
      console.log(xhr);
      p.innerText = xhr.responseText;
    } else {
      console.log("⚠️ Error: " + xhr.status);
    }
  };

  // 🔹 When the request ends (success or fail)
  xhr.onloadend = () => {
    console.log("🏁 Function ended");
  };

  // 🔹 When a network or file error occurs
  xhr.onerror = () => {
    console.log("❌ Something went wrong!");
  };

  // 🔹 Send the request
  xhr.send();
}
