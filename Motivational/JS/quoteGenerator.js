const quotes = [{
    "speaker": "Swami Vivekananda",
    "quote": "Jibe prem kore jei jon sei jon sebiche ishwar",
    "category": "Motivational"
  }, {
    "speaker": "Subhas Chandra Bose",
    "quote": "Give me blood, and I will give you freedom",
    "category": "Motivational"
  },
  {
    "speaker": "Groot",
    "quote": "I AM GROOT!",
    "category": "Motivational"
  }
];
const cardContainer = document.querySelector('card-container');
const newCard = document.createElement('div');

newCard.setAttribute('id', 'category');
cardContainer.append('div');

var speaker = document.getElementById('speaker');
var quote = document.getElementById('quote');
var category = document.getElementById('category');

speaker.textContent = quotes[0].speaker;
quote.textContent = quotes[0].quote;
category.textContent = quotes[0].category;


function createCardHeader() {
  const newCardHeader = document.createElement('div');
  newCardHeader.textContent = quotes[1].category;
  newCardHeader.className = 'card-header';
  newCardHeader.id = 'category';
  return newCardHeader;
}

function createCardImage() {

}

function createCardBody() {

}