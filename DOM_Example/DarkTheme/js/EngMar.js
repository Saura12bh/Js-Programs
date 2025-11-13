// Function to translate English text to Marathi using MyMemory API
const translateToMarathi = async (text) => {
  // Encode the text so that spaces and special characters are safe in URL
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|mr`
  );

  // Wait for the API response and convert it to JSON
  const data = await response.json();

  // Return the translated Marathi text from API response
  return data.responseData.translatedText;
};

// Get the input and output elements from HTML using their IDs
const n1 = document.getElementById("name"); // Name input field
const n2 = document.getElementById("name1"); // Name display div

const e1 = document.getElementById("email"); // Email input field
const e2 = document.getElementById("email1"); // Email display div

const c1 = document.getElementById("city"); // City input field
const c2 = document.getElementById("city1"); // City display div

// Function to update the translated text in real-time
const updateTranslation = async (inputElement, outputElement) => {
  // Call the translate function and wait for the Marathi translation
  const translatedText = await translateToMarathi(inputElement.value);

  // Display the translated text in the corresponding output element
  outputElement.textContent = translatedText;
};

// Add event listeners to input fields to detect changes as the user types
n1.addEventListener("input", () => updateTranslation(n1, n2));
e1.addEventListener("input", () => updateTranslation(e1, e2));
c1.addEventListener("input", () => updateTranslation(c1, c2));
