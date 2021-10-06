const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


// show loading
function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete(){
  quoteContainer.hidden = false;
  loader.hidden = true;
}
// hente quotes fra Local quotesArray:
// newQuote();

// function newQuote(){
//   // random quote from array
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   populateHtml(quote);
  
// }


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

// tweet quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// evebtlisteners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// hente quotes fra api: (var treigt, så jeg kommenterte ut.):

let apiQuotes = [];

// show new quote
function newQuote(){
  loading();
  // random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if authorfield is blank and replace with unknown
  populateHtml(quote)
  // set quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}

// get quotes from api
async function getQuotes(){
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error){
    // catch error
  }
}


// on load
getQuotes();
