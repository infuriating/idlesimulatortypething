function cashCounter() {
  document.getElementById("cash_updater").innerHTML = `${saveState.cash.toFixed(
    1
  )}`;
  document.getElementById(
    "addCash_updater"
  ).innerHTML = `${saveState.addCash.toFixed(2)}`;

  if (saveState.cash >= 1000) {
    document.getElementById(
      "cash_updater"
    ).innerHTML = `${saveState.cash.toFixed(0)}`;
  }
  if (saveState.addCash >= 10) {
    document.getElementById(
      "addCash_updater"
    ).innerHTML = `${saveState.addCash.toFixed(1)}`;
  } else if (saveState.addCash >= 1000) {
    document.getElementById(
      "addCash_updater"
    ).innerHTML = `${saveState.addCash.toFixed(0)}`;
  }
}

const rebirthCalculation = 0.25 * saveState.rebirths;

setInterval(() => {
  saveState.cash += saveState.addCash;
  saveState.addCash +=
    saveState.cashMultiplier * saveState.multiply + rebirthCalculation;
  saveState.totalCash +=
    saveState.cashMultiplier * saveState.multiply + rebirthCalculation;
  cashCounter();
  // upgradeChecker();
}, 1000);
