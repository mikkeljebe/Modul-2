const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')
// eventlisteners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Model
// Array to populate with getQuotesFromApi()
let apiQuotes = [];


// on load
getQuotesFromApi();

async function getQuotesFromApi(){
  showLoadingSpinner();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error){
    console.log(error);
  }
}

function newQuote(){
  showLoadingSpinner();
  // random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  populateHtml(quote);
  removeLoadingSpinner();
}

 // Check if authorfield is blank and replace with unknown
 function populateHtml(quote) {
  if (!quote.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author
  }
  // check the quote length to determine styling
  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
}

function showLoadingSpinner(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner(){
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// tweet quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}




// hente quotes fra Local quotesArray:
// newQuote();

// function newQuote(){
//   // random quote from array
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   populateHtml(quote);
  
// }



