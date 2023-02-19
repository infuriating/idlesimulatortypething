setInterval(() => {
  saveState.cash += saveState.addCash;
  saveState.addCash += saveState.cashMultiplier * saveState.multiply;
  document.getElementById("cash_updater").innerHTML = `${saveState.cash.toFixed(
    1
  )}`;
  document.getElementById(
    "addCash_updater"
  ).innerHTML = `${saveState.addCash.toFixed(1)}`;
}, 1000);
