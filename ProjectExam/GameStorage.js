// Function to store game data in local storage
function storeGameData() {
  var gameData = {
    cardList: cardList,
    dropCard: dropCard,
    allPlayers: allPlayers
  };

  localStorage.setItem("gameData", JSON.stringify(gameData));
  console.log("Game data stored in local storage.");
}

// Function to retrieve game data from local storage
function retrieveGameData() {
  var storedData = localStorage.getItem("gameData");

  if (storedData) {
    try {
      var gameData = JSON.parse(storedData);
      cardList = gameData.cardList || [];
      dropCard = gameData.dropCard || [];
      allPlayers = gameData.allPlayers || [];
      console.log("Game data retrieved from local storage:", gameData);
    } catch (error) {
      console.error("Error parsing game data:", error);
      // Handle the error, e.g., reset the game data or show an error message
    }
  } else {
    console.log("No game data found in local storage.");
  }
}

// Export the functions to make them accessible from other files
export { storeGameData, retrieveGameData };