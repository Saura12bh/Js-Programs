document.getElementById("btn").addEventListener("click", getData);

function getData() {
  fetch("data.txt") // Fetching local text file
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }
      return response.text(); // Convert response to text
    })
    .then((data) => {
      console.log("✅ Data received:", data);
      document.getElementById("output").innerText = data;
    })
    .catch((error) => {
      console.error("❌ Error fetching data:", error);
    });
}
