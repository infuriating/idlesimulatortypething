// hello little snooper
// welcome to my troubleshooting file
// whatever this file contains will be removed once the game is finished
// fuck around and break the game for me thx xoxo

function money() {
  saveState.cash += 2500;
  document.getElementById("cash_updater").innerHTML = `${saveState.cash.toFixed(
    1
  )}`;
}
