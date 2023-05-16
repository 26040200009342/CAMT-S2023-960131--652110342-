var CARD_TYPE = ["♣", "♦", "♥", "♠"];
var CARD_NUMBER = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  " 7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

var cardList = [];

function storgeCard() {
  for (var i = 0; i < CARD_TYPE.length; i++) {
    for (var j = 0; j < CARD_NUMBER.length; j++) {
      var card = {
        value: [CARD_TYPE[i], CARD_NUMBER[j]],
      };
      cardList.push(card);
    }
  }
}

function shuffleArray(array) {
  // Loop through the array backwards from the last element to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the values at indices i and j using destructuring assignment
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Return the shuffled array
  return array;
}

console.log(cardList);
