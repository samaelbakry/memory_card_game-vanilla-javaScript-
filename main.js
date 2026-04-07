const cards = document.querySelectorAll(".card");

let cardOne;
let cardTwo;
let disableDeck = false;

function flipCard(e) {
  let clickedCard = e.currentTarget;
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true
    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchedCards(cardOneImg, cardTwoImg);
  }
}

function matchedCards(cardOneImg, cardTwoImg) {
  if (cardOneImg === cardTwoImg) {
    cardOne = null;
    cardTwo = null;
    disableDeck = false;
    return;
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);
  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = null;
    cardTwo = null;
    disableDeck = false;
  }, 1200);
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

