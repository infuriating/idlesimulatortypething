let modalh3 = document.getElementById("rebirth_modal_content_h3");
let modalh4 = document.getElementById("rebirth_modal_content_h4");
let rebirthConfirmation = document.getElementById("rebirth_modal_confirmation");

function rebirth(rebirth) {
  switch (rebirth) {
    case "modalOpen":
      document.getElementById("modal_backdrop").style.display = "block";
      document.getElementById("rebirth_modal").style.display = "grid";
      break;
    case "modalClose":
      document.getElementById("modal_backdrop").style.display = "none";
      document.getElementById("rebirth_modal").style.display = "none";
      break;
    case "rebirthConfirmation":
      localStorage.removeItem("saveState");
      location.reload();
      break;
  }
}

// if (saveState.rebirths == 0) {
//   modalh3.innerHTML = "First Rebirth";
// } else if (saveState.rebirths == 1) {
//   modalh3.innerHTML = "Second Rebirth";
// } else if (saveState.rebirths == 2) {
//   modalh3.innerHTML = "Third Rebirth";
// }
// if (saveState.rebirths == 0 && saveState.cash >= 1000000) {
//   modalh3.innerHTML =
//     "You have enough money to rebirth. Do you want to rebirth?";
//   rebirthConfirmation.style.display = "block";
// } else {
//   modalh3.innerHTML =
//     "You don't have enough money to rebirth.<br>You need 1.000.000$ to rebirth.";
//   modalh4.innerHTML = "";
//   rebirthConfirmation.style.display = "none";
// }
