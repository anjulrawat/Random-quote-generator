const quoteContainer = document.querySelector('.quote-container');
const quoteElement = document.querySelector('#quote');
const newQuoteButton = document.querySelector('#new-quote');

async function getQuotes() {
  const response = await fetch('https://api.quotable.io/quotes');
  const data = await response.json();
  return data.results;
}

function getRandomQuote(quotes) {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

async function setRandomQuote() {
  const quotes = await getQuotes();
  const randomQuote = getRandomQuote(quotes);
  quoteElement.textContent = randomQuote.content;
}

newQuoteButton.addEventListener('click', setRandomQuote);

setRandomQuote();
