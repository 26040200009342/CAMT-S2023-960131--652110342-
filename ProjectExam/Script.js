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
var cardDrop = [];

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

// numOfPlayer was created here
// Retrieve numOfPlayers from localStorage
var numOfPlayers = localStorage.getItem("numOfPlayers");
var playerIndex = 0; // Index of player for giving card
var allPlayers = []; // All player are here
var CARD_TO_DEAL = 5;

var indexPlayerTurn = 0;

function createPlayer() {
  allPlayers = []; // Make sure it's empty
  for (var i = 0; i < numOfPlayers; i++) {
    var player = {
      name: "Player " + (i + 1), // Player number
      hand: [], // Player hand is empty
    };
    allPlayers.push(player); // Add player to all player
  }
  //Finished create player
}

// Main Player already existed //

// Create Bot
function createBot() {
  for (var i = 1; i < numOfPlayers; i++) {
    // Start from 1 because 0 is main player
    var botHTML = `
          <div class="player-block" id="player-block-${i}"><!--player bot-->
            <div class="circle-pic">
              <div class="player">
                <img src="image/1.png">
              </div> 
            </div>
            <div class="card-bot">
              <div class="show-card-bot" id="show-card-bot-${i}"><!--Card bot on hand-->
  
              </div>
            </div>
          </div>
        `;

    document.getElementById("player-zone").innerHTML += botHTML;
  }
}

function dealCardsMainPlayer() {
  indexPlayerTurn = 0;
  for (var i = 0; i < CARD_TO_DEAL; i++) {
    if (cardList.length > 0) {
      // If deck is not empty

      var card = cardList.pop(); // Get 1 card from deck
      allPlayers[indexPlayerTurn].hand.push(card); // Give it to the current player

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
      console.log(
        "Main player : " + indexPlayerTurn + card.value[0] + card.value[1]
      );
    }
  }
  indexPlayerTurn++; // Move to other player turn
}

function dealCardsBotPlayer() {
  for (var i = 0; i < CARD_TO_DEAL; i++) {
    if (cardList.length > 0) {
      // If deck is not empty

      var card = cardList.pop(); // Get 1 card from deck
      allPlayers[indexPlayerTurn].hand.push(card); // Give it to the current player

      var botHTML = `
            <div class="card-bot-play">

              <div class="card-number-bot">
                ${card.value[1]}
              </div>
              <div class="card-body-bot">
                <div class="card-pic1-bot">
                  <div class="card-title">
                    ${card.value[0]} 
                  </div>
                </div>
              <div class="card-pic2-bot">
                  <div class="card-title">
                    ${card.value[0]} 
                  </div>
                </div>
              </div>

            </div>
          `;
      // Append the card HTML to the show-card-bot div
      document.getElementById(`show-card-bot-${indexPlayerTurn}`).innerHTML +=
        botHTML;
      console.log("Bot : " + indexPlayerTurn + card.value[0] + card.value[1]);
    }
  }
  indexPlayerTurn++; // Move to other player turn
}

// Function to handle getting another card from the deck
// indexPlayerTurn should be 0
function getAnotherCardMainPlayer() {
  indexPlayerTurn = 0;
  // Check if the deck has cards remaining and if card on hand more than 6
  if (cardList.length > 0 && allPlayers[0].hand.length < 6) {
    // Get a card from the deck
    var card = cardList.pop();

    // Add the card to the current player's hand
    allPlayers[0].hand.push(card);

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
    // Check if main player card has been given
    console.log(
      "Main Player: " + indexPlayerTurn + card.value[0] + card.value[1]
    );
  } else {
    window.alert("Maximum Card");
  }
}

//indexPlayerTurn should be 1-4
function getAnotherCardBot() {
  indexPlayerTurn++;
  // Get the current player
  var currentPlayer = allPlayers[indexPlayerTurn];

  if (cardList.length > 0 && currentPlayer.hand.length < 6) {
    // Get a card from the deck
    var card = cardList.pop();
    // Add the card to the current player's hand
    currentPlayer.hand.push(card);

    var botHTML = `
            <div class="card-bot-play"">
              <div class="card-number-bot">
                ${card.value[1]}
              </div>
              <div class="card-body-bot">
                <div class="card-pic1-bot">
                  <div class="card-title">
                    ${card.value[0]} 
                  </div>
                </div>
              <div class="card-pic2-bot">
                  <div class="card-title">
                    ${card.value[0]} 
                  </div>
                </div>
              </div>
            </div>
          `;

    document.getElementById(`show-card-bot-${indexPlayerTurn}`).innerHTML +=
      botHTML;
  } else {
    console.log("Bot" + indexPlayerTurn + "Maximum Card");
  }
}

function clickToDrop() {
  // Add event listeners to each card in the hand
  var handCards = document.querySelectorAll(
    ".show-card .card, .show-card-bot .card"
  );
  handCards.forEach(function (card) {
    card.addEventListener("click", function () {
      dropCard(card);
    });
  });
}

function dropCard(cardElement) {
  // Remove the card from the show-card zone
  var showCardZone = document.getElementById("show-card");
  showCardZone.removeChild(cardElement);

  // Add the card to the drop-card-zone
  var dropCardZone = document.querySelector(".drop-card-zone");
  dropCardZone.appendChild(cardElement);
}

window.addEventListener("load", function () {
  storgeCard();
  shuffleArray(cardList);
  createPlayer();
  // Main player create
  createBot();
  dealCardsMainPlayer(); // Give card to main player
  for (var i = 0; i < numOfPlayers - 1; i++) {
    // give card to all bot
    dealCardsBotPlayer();
  }

});

/*function dropCard(cardElement) {
  // Remove the card from the current parent element
  cardElement.parentNode.removeChild(cardElement);

  // Add the card to the drop-card-zone
  document.querySelector(".drop-card-zone").appendChild(cardElement);
}*/
