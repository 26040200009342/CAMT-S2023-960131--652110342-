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
  // Give card to all player
  // Give 5 cards to 1 player at a time
  allPlayers = []; // Make sure it's empty
  for (var i = 0; i < numOfPlayers; i++) {
    var player = {
      name: "Player " + (i + 1), // Player number
      hand: [], // Player hand is empty
    };
    allPlayers.push(player); // Add player to all player
    //Finished create player

    // Start giving card
    var cardsToDeal = 5;
    for (var j = 0; j < cardsToDeal; j++) {
      if (cardList.length > 0) {
        // If deck is not empty
        var card = cardList.pop(); // Get 1 card from deck
        player.hand.push(card); // Give it to the current player

        // Give 5 card to start with to only the first player
        if (j < 5 && i === 0) {
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
      // Check if all card has been given
      console.log(i, j, card);
    }
  }
}

// Function to handle getting another card from the deck
// mainPlayerPosition should be 0
function getAnotherCardMainPlayer(mainPlayerPosition) {
  // Get the current player
  var currentPlayer = allPlayers[mainPlayerPosition];

  // Check if the deck has cards remaining and if card on hand more than 6
  if (cardList.length > 0 && currentPlayer.hand.length < 6) {
    // Get a card from the deck
    var card = cardList.pop();

    // Add the card to the current player's hand
    currentPlayer.hand.push(card);

    // Only 1 player show
    // Generate HTML for the card
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
  } else {
    window.alert("Maximum Card");
  }
  // Check if main player card has been given
  console.log("Main Player: " + card);
}

//botPlayerPosition should be 2-5
function getAnotherCardBot(botPlayerPosition) {
  // Get the current player
  var currentPlayer = allPlayers[botPlayerPosition];

  if (cardList.length > 0 && currentPlayer.hand.length < 6) {
    // Get a card from the deck
    var card = cardList.pop();

    // Add the card to the current player's hand
    currentPlayer.hand.push(card);
  } else {
    console.log("Bot" + botPlayerPosition + "Maximum Card");
  }
  console.log("Bot" + botPlayerPosition + " Player: " + card.value[0] + card.value[1]);
}

function getAnotherCard() {
  for (var i = 0; i < numOfPlayers; i++) {
    if (i === 0) {
      // if first player
      getAnotherCardMainPlayer(i);
    } else if (i > 0 && i < numOfPlayers) {
      // if bot
      getAnotherCardBot(i);
    }
  }
}

window.addEventListener("load", function () {
  // Call the dealCards function here
  storgeCard();
  shuffleArray(cardList);
  dealCards();
});
