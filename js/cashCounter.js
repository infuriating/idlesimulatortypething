setInterval(() => {
  saveState.cash += saveState.addCash;
  saveState.addCash += saveState.cashMultiplier * saveState.multiply;
  document.getElementById(
    "addCash"
  ).innerHTML = `addCash: ${saveState.addCash.toFixed(1)}`;
  document.getElementById("cash").innerHTML = `cash: ${saveState.cash.toFixed(
    1
  )}`;
}, 1000);
