
function updateNumOfPlayers() {

  // get all checkbox
  var checkbox2 = document.getElementById("checkbox-2");
  var checkbox3 = document.getElementById("checkbox-3");
  var checkbox4 = document.getElementById("checkbox-4");
  var checkbox5 = document.getElementById("checkbox-5");

  // see what which is checked
  // and set numOfPlayer inside the localStorage
  if (checkbox2.checked) {
    localStorage.setItem("numOfPlayers", 2);
  } else if (checkbox3.checked) {
    localStorage.setItem("numOfPlayers", 3);
  } else if (checkbox4.checked) {
    localStorage.setItem("numOfPlayers", 4);
  } else if (checkbox5.checked) {
    localStorage.setItem("numOfPlayers", 5);
  } else {
    // if none box is checked set to 0
    localStorage.setItem("numOfPlayers", 0);
  }

  navigateToNextPage();
}


function navigateToNextPage() {
  // get nomOfPlayer inside the localStorage
  var numOfPlayers = localStorage.getItem("numOfPlayers");
  
  if (numOfPlayers > 0) {// if more than 0 continue to the next page
    window.location.href = "PlayGame.html";
  } else {// if not stay in the same page
    window.alert("Please select the right number of players");
  }
}
