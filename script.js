// Get Quotes from localQuotes using quotes.js
// function newQuote() {
//   // Pick a Random Quote form apiQuotes Array
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
// };

// On Load
// newQuote();

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a Random Quote form apiQuotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
};

// Get Quotes from API 
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch(error) {
    // Catch Error Here
  }
};

// On Load
getQuotes();




