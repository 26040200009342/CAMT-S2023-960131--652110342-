// Card deck
var CARD_TYPE = ["♣", "♦", "♥", "♠"];
var CARD_NUMBER = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
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
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var numOfPlayers = 5; // Number of player before start game
var playerIndex = 0; // Index of player for giving card
var allPlayers = []; // All player are here

function dealCards() {
  // Give card to all player but don't show yet
  allPlayers = []; // Make sure it's empty
  for (var i = 0; i < numOfPlayers; i++) {
    var player = {
      name: "Player " + (i + 1), // Player number
      hand: [], // Player hand is empty
    };
    allPlayers.push(player); // Add player to all player
  }

  var cardsToDeal = numOfPlayers * 5;
  for (var i = 0; i < cardsToDeal; i++) {
    var currentPlayer = allPlayers[playerIndex];
    if (cardList.length > 0) {
      // If deck is not empty
      var card = cardList.pop(); // Get 1 card from deck
      currentPlayer.hand.push(card); // Give it to the current player

      // Generate HTML for the card only when i is equal to 0
      if (i < 5) {
        var cardHTML = `
          <div class="card-mainplay">
            <div class="card-number">
              ${card.value[1]}
            </div>
            <div class="card-body">
              <div class="card-pic1">
                <div class="card-title">
                  ${card.value[0]}
                </div>
              </div>
              <div class="card-pic2">
                <div class="card-title">
                  ${card.value[0]}
                </div>
              </div>
            </div>
          </div>
        `;

        // Append the card HTML to the show-card div
        document.getElementById("show-card").innerHTML += cardHTML;
      }
    }
    playerIndex = (playerIndex + 1) % numOfPlayers;
  }
}
window.addEventListener('load', function() {
  // Call the dealCards function here
  storgeCard();
  shuffleArray(cardList);
  dealCards();
});
