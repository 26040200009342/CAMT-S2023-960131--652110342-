
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
        isPair: false, // No pair
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
  for (var i = 0; i < CARD_TO_DEAL; i++) {
    if (cardList.length > 0) {
      // If deck is not empty

      var card = cardList.pop(); // Get 1 card from deck
      allPlayers[indexPlayerTurn].hand.push(card); // Give it to the current player

      var cardHTML = `
          <div class="card-mainplay" onclick="getCurrentCardElement()">
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
  indexPlayerTurn++; // Move to the next player
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
  indexPlayerTurn++; // Give card to all bot
}

// Function to handle getting another card from the deck
// indexPlayerTurn should be 0
function getAnotherCardMainPlayer() {
  // Check if the deck has cards remaining and if card on hand more than 6
  if (cardList.length > 0 && allPlayers[0].hand.length < 6) {
    // Get a card from the deck
    var card = cardList.pop();

    // Add the card to the current player's hand
    allPlayers[0].hand.push(card);

    // Only 1 player show
    // Generate HTML for the card
    var cardHTML = `
      <div class="card-mainplay" onclick="getCurrentCardElement()">
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

//*******************Get Crruent Card value Start********************************//

var cardElement;

function getCurrentCardElement() {
  // For both I hope
  // Get the card element that was clicked
  cardElement = event.currentTarget;
  console.log("Selected card element: ", cardElement);
}

//*******************Get Crruent Card value Ended********************************//
//**********************Player Drop Start*********************************//

function removeCurrentCardValue(cardElement) {
  // For Main Player
  // Remove the card that have been select value
  var cardNumber = cardElement.querySelector(".card-number").textContent.trim();
  var cardTitle = cardElement.querySelector(".card-title").textContent.trim();

  // get value of the card that click
  var currentCardInfo = { value: [cardTitle, cardNumber] };

  allPlayers[0].hand = allPlayers[0].hand.filter(function (card) {
    return card.value[1] !== currentCardInfo.value[1];
  });
  cardDrop.push(currentCardInfo);

  console.log(
    "In hand, there are " +
      allPlayers[0].hand.length +
      " cards remaining: " +
      JSON.stringify(allPlayers[0].hand)
  );
  console.log(
    "I am Clicked. Card Number: " +
      currentCardInfo.value[1] +
      ", Card Title: " +
      currentCardInfo.value[0]
  );
}

function dropCard() {
  // For Main Player
  removeCurrentCardValue(cardElement); // drop card that player choose
  var boxDropCard = document.querySelector(".box-drop-card");
  boxDropCard.appendChild(cardElement); // move it to .box-drop-card

  // Change the class of the dropped card
  cardElement.classList.remove("card-mainplay");
  cardElement.classList.add("card-drop");

  cardElement.setAttribute("onclick", "confirmGetCard()"); // Add onclick attribute

  playTurn();
}

//************************Player Drop Ended******************************//
//************************Bot Drop Start***************************//

function createCardElement(card) {
  // For bot
  var cardHTML = `
  <div class="card-number">${card.value[1]}</div>
  <div class="card-body">
  <div class="card-pic1">
  <div class="card-title">${card.value[0]}</div>
  </div>
  <div class="card-pic2">
  <div class="card-title">${card.value[0]}</div>
  </div>
  </div>
  `;

  var cardElement = document.createElement("div");
  cardElement.classList.add("card-drop");
  cardElement.innerHTML = cardHTML;
  cardElement.setAttribute("onclick", "confirmGetCard()"); // Add onclick attribute

  return cardElement;
}

function botDropCard() {
  // For bot
  var currentPlayer = allPlayers[indexPlayerTurn];

  // Check if the current player has any cards in hand
  if (currentPlayer.hand.length > 0) {
    var card = currentPlayer.hand[0]; // Get the first card from the player's hand

    // Remove the card from the player's hand
    currentPlayer.hand.splice(0, 1);

    // Add the dropped card to the cardDrop array
    cardDrop.push(card);

    // Create a new card element for the dropped card
    var cardElement = createCardElement(card);

    // Append the card element to the .box-drop-card element
    var boxDropCard = document.querySelector(".box-drop-card");
    boxDropCard.appendChild(cardElement);

    // Remove the dropped card from the bot's hand
    var botHandElement = document.getElementById(
      `show-card-bot-${indexPlayerTurn}`
    );
    var droppedCardElement = botHandElement.querySelector(".card-bot-play");
    botHandElement.removeChild(droppedCardElement);

    console.log(
      "Bot " +
        indexPlayerTurn +
        " dropped card: " +
        card.value[0] +
        card.value[1]
    );
  }
}

//************************Bot Drop Ended***************************//
//************************Player Obtain Card From Drop Start***************************//

function getAnotherCardFromDrop(cardElement) {
  // Check if the card element is a valid card-drop element
  if (cardElement.classList.contains("card-drop")) {
    // Get the selected card value from the card element
    var cardNumber = cardElement
      .querySelector(".card-number")
      .textContent.trim();
    var cardTitle = cardElement.querySelector(".card-title").textContent.trim();

    // Find the corresponding card object in the drop pile
    var cardIndex = cardDrop.findIndex(function (card) {
      return card.value[0] === cardTitle && card.value[1] == cardNumber;
    });

    // Check if the drop pile has cards remaining and if the player's hand has fewer than 6 cards
    if (cardIndex !== -1 && allPlayers[0].hand.length < 6) {
      // Get the selected card from the drop pile
      var card = cardDrop.splice(cardIndex, 1)[0];

      // Add the card to the current player's hand
      allPlayers[0].hand.push(card);

      // Generate HTML for the card
      var cardHTML = `
      <div class="card-mainplay" onclick="getCurrentCardElement()">
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

      // Move the card element from .box-drop-card to #show-card
      var boxDropCard = document.querySelector(".box-drop-card");
      boxDropCard.removeChild(cardElement);

      // Check if the main player card has been obtained
      console.log("Main Player obtained card: ", card.value[0], card.value[1]);
    } else {
      window.alert("Maximum Card");
    }
  }
}

function confirmGetCard() {
  getCurrentCardElement();
  if (cardElement.classList.contains("card-drop")) {
    var confirmAction = confirm("Do you want to get this card?");
    if (confirmAction) {
      // Call getAnotherCardFromDrop with the selected card element
      getAnotherCardFromDrop(cardElement);
    }
  }
  // Prompt the user for confirmation
}

//************************Player Obtain Card From Drop Ended***************************//
//************************Bot Obtain Card From Drop Ended***************************//

function removeCardFromDrop(cardElement) {
  var boxDropCard = document.querySelector(".box-drop-card");
  boxDropCard.removeChild(cardElement);
}

function botGetCard() {
  var currentPlayer = allPlayers[indexPlayerTurn];

  // Loop through the cards in the bot's hand
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    var card = currentPlayer.hand[i];

    // Check if there is a card with the same value in the drop pile
    var dropCardIndex = cardDrop.findIndex(function (dropCard) {
      return (
        dropCard.value[0] === card.value[0] &&
        dropCard.value[1] === card.value[1]
      );
    });

    // Check if the bot should get the card from the drop pile
    if (dropCardIndex !== -1) {
      // Get the card from the drop pile at the specific index
      var droppedCard = cardDrop.splice(dropCardIndex, 1)[0];

      // Replace the card in the bot's hand with the dropped card
      currentPlayer.hand[i] = droppedCard;

      // Remove the card from the drop pile display
      removeCardFromDrop(cardElement);

      console.log(
        "Bot " + indexPlayerTurn + " obtained card from drop pile:",
        droppedCard.value[0],
        droppedCard.value[1]
      );
    }
    // Get a card from the card list
    else if (cardList.length > 0) {
      // Get a card from the card list
      var newCard = cardList.pop();

      // Replace the card in the bot's hand with the new card
      currentPlayer.hand[i] = newCard;

      console.log(
        "Bot " + indexPlayerTurn + " obtained card from card list:",
        newCard.value[0],
        newCard.value[1]
      );
    }
  }
}

//************************Bot Obtain Card From Drop Ended***************************//
//************************Pair Card Start***************************//

function pairCard() {
  for (var check = 0; check < allPlayers.length; check++) {
    var currentPlayer = allPlayers[check];
    var hand = currentPlayer.hand; // Get the current player's hand

    var pairsFound = false; // Flag to track if any pairs are found

    // Loop through each card in the hand
    for (var i = 0; i < hand.length - 1; i++) {
      for (var j = i + 1; j < hand.length; j++) {
        if (
          (hand[i].value[1] === "10" ||
            hand[i].value[1] === "J" ||
            hand[i].value[1] === "Q" ||
            hand[i].value[1] === "K") &&
          (hand[j].value[1] === "10" ||
            hand[j].value[1] === "J" ||
            hand[j].value[1] === "Q" ||
            hand[j].value[1] === "K")
        ) {
          if (hand[i].value[1] === hand[j].value[1]) {
            // Found a pair
            console.log("Pair found:", hand[i], hand[j]);
            hand[i].isPair = true;
            hand[j].isPair = true;
            pairsFound = true; // Set the flag to true
          }
        } else {
          if (hand[i].value[1] === "A") {
            hand[i].value[1] = "1";
          }
          if (hand[j].value[1] === "A") {
            hand[j].value[1] = "1";
          }

          var first = parseInt(hand[i].value[1]);
          var second = parseInt(hand[j].value[1]);
          if (first + second === 10) {
            console.log("Pair found:", hand[i], hand[j]);
            hand[i].isPair = true;
            hand[j].isPair = true;
            pairsFound = true; // Set the flag to true
          }
        }
      }
    }

    if (!pairsFound) {
      console.log("No pairs found for player", check);
    }

    currentPlayer.isPair = pairsFound; // Update the currentPlayer's isPair property
  }
}

function checkEndGame() {
  var allPaired = true; // Flag to track if all players have paired cards

  for (var i = 0; i < allPlayers.length; i++) {
    var currentPlayer = allPlayers[i];

    if (!currentPlayer.isPair) {
      allPaired = false; // Set the flag to false if any player does not have paired cards
      break;
    }
  }

  if (allPaired) {
    console.log("Game ended. All cards paired.");
    // Perform game end actions here
  } else {
    console.log("Game continues.");
    // Perform actions for game continuation here
  }
}

//************************Pair Card Ended***************************//

function playTurn() {
  // Check if all players have taken their turns
  if (indexPlayerTurn >= numOfPlayers) {
    console.log("End of round. Next round begins.");
    indexPlayerTurn = 0; // Reset the turn to the main player
    console.log("Bruh");
    checkEndGame(); // Check if the game has ended
    return;
  }

  if (indexPlayerTurn !== 0) {
    getAnotherCardBot();
    botDropCard();
  }

  console.log("indexPlayerTurn:", indexPlayerTurn); // Log the current value of indexPlayerTurn

  indexPlayerTurn++;

  setTimeout(playTurn, 0); // Schedule the next turn asynchronously
}

window.addEventListener("load", function () {
  storgeCard();
  shuffleArray(cardList);

  createPlayer();
  createBot();
  dealCardsMainPlayer();
  for (var i = 0; i < numOfPlayers - 1; i++) {
    dealCardsBotPlayer();
  }

  playTurn();
  console.log("i am here");
});
