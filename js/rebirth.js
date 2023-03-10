function rebirth(rebirth) {
  // innerHTML variables
  let modalh1 = document.getElementById("rebirth_modal_content_h1"),
    modalh3 = document.getElementById("rebirth_modal_content_h3"),
    modalh4 = document.getElementById("rebirth_modal_content_h4"),
    rebirthDiv = document.getElementById("rebirth"),
    rebirthEmphasis = document.getElementById("rebirth_yellow"),
    rebirthRender = document.getElementById("rebirth_updater"),
    rebirthConfirmation = document.getElementById("rebirth_modal_confirmation");

  // rebirth 1 upgrades
  let clicker = document.getElementById("clicker");

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
      document.getElementById("rebirth_modal").style.display = "none";
      document.getElementById("rebirthing").style.display = "grid";
      // resets values that are not the total to zero
      saveState.cash = 0;
      saveState.addCash = 0.5;
      saveState.cashMultiplier = 0.05;
      saveState.multiply = 1;
      // reset upgrades cost and amount in localstorage
      for (let i = 0; i < saveState.upgrades.length; i++) {
        saveState.upgrades[i].cost = saveState.upgrades[i].baseCost;
        saveState.upgrades[i].amount = 0;
      }
      // + one rebirth
      saveState.rebirths.rebirth += 1;
      saveState.rebirths.rebirthMultiplier *= 1.25;
      saveState.upgradePoints.upgradePoints += 3;
      saveState.rebirths.rebirthCost *= 10;
      setInterval(() => {
        location.reload();
      }, 1500);
      break;
  }
  if (saveState.rebirths.rebirth == 0) {
    modalh1.innerHTML = "First Rebirth";
    rebirthDiv.style.display = "none";
    clicker.style.display = "none";
  } else if (saveState.rebirths.rebirth >= 1) {
    modalh1.innerHTML = "Rebirth " + saveState.rebirths.rebirth + "!";
    rebirthDiv.style.display = "block";
    rebirthRender.innerHTML = "Rebirth ";
    rebirthEmphasis.innerHTML = saveState.rebirths.rebirth;
    clicker.style.display = "block";
    document.getElementById("upgrade_container6").style.display = "block";
  }
  //
  if (
    saveState.rebirths.rebirth == 0 &&
    saveState.cash > saveState.rebirths.rebirthCost
  ) {
    modalh3.innerHTML =
      "You have enough money to rebirth.<br>You will start over again with some great advancements.";
    modalh4.innerHTML = "You will receive a x1.25 boost and a Clicker upgrade.";
    rebirthConfirmation.style.display = "block";
  } else if (
    saveState.rebirths.rebirth >= 1 &&
    saveState.cash > saveState.rebirths.rebirthCost
  ) {
    modalh3.innerHTML =
      "You have enough money to rebirth. Do you want to rebirth?";
    modalh4.innerHTML = "You will receive a 1.25x boost.";
    rebirthConfirmation.style.display = "block";
  } else {
    modalh3.innerHTML = "You don't have enough money!";
    modalh4.innerHTML = `You need $${saveState.rebirths.rebirthCost} to rebirth.`;
    rebirthConfirmation.style.display = "none";
  }
}

setTimeout(() => {
  rebirth();
}, 1000);
