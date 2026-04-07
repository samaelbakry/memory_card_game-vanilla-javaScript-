const cards = document.querySelectorAll(".card");

let cardOne = null;
let cardTwo = null;
let disableDeck = false;
let matchedCard = 0;

function flipCard(e) {
  let clickedCard = e.currentTarget;
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");

    if (!cardOne) {
      cardOne = clickedCard;
      return;
    }

    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;

    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(cardOneImg, cardTwoImg) {
  if (cardOneImg === cardTwoImg) {
    matchedCard++;
    cardOne = null;
    cardTwo = null;
    disableDeck = false;

    if (matchedCard === 8) {
      setTimeout(() => {
        shuffleCards();
      }, 1200);
    }
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

function shuffleCards() {
    disableDeck =true
  matchedCard = 0;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  arr = arr.concat(arr)
  arr.sort(() => Math.random() - 0.5);

  cards.forEach((card, index) => {
    let imgTag = card.querySelector("img");
    imgTag.src = `./Memory Card Game Images/img-${arr[index]}.png`;
    card.classList.remove("flip");
  });
  disableDeck = false
}
shuffleCards()

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
