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
  if (saveState.addCash >= 100) {
    document.getElementById(
      "addCash_updater"
    ).innerHTML = `${saveState.addCash.toFixed(1)}`;
  } else if (saveState.addCash >= 1000) {
    document.getElementById(
      "addCash_updater"
    ).innerHTML = `${saveState.addCash.toFixed(0)}`;
  }
}

setInterval(() => {
  saveState.cash += saveState.addCash;
  saveState.addCash +=
    saveState.cashMultiplier *
    saveState.multiply *
    saveState.rebirths.rebirthMultiplier *
    saveState.upgradePoints.upgradePointsMultiplier *
    saveState.dailyMissions.dailyMissionMultiplier *
    criticalHit;
  saveState.totalCash += saveState.addCash;
  criticalHit;
  cashCounter();
  checkUpgrades();
}, 1000);
