// Card deck //
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

function starterDeck(){
  storgeCard()// เก็บค่าใน cardList
  shuffleArray(cardList)//เอาค่ามาสลับ
}


//drop zone//
function listDropCard(){
  var cardList = [];
}

//player zone//
var player
function playerAmount(amount){
  player = amount
}
function handCardList(){
  var handCard = [];
}

const players = [
    { name: 'Player 1', hand: [] },
    { name: 'Player 2', hand: [] },
    // Add more players as needed
  ];
  
  function giveCardToPlayer(player) {
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(cardIndex, 1)[0];
    player.hand.push(card);
  }
  
  function distributeCardsToPlayers() {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < numberOfCardsPerPlayer; j++) {
        giveCardToPlayer(players[i]);
      }
    }
  }
  
  // Call the distributeCardsToPlayers function to distribute cards to all players
  distributeCardsToPlayers();
  
  // Print the hands of each player
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i].name}:`, players[i].hand);
  }
  
function pickCardFromDeck(){

}

function pickCardFromDrop(){

}

function dropCard(){

}

// play zone //