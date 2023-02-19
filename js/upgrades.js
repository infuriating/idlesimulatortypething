function loadUpgrades() {
  for (let i = 0; i < saveState.upgrades.length; i++) {
    document.getElementById("upgrades").innerHTML += `
        <div class="upgrade">
        <div class="upgrade__name">${saveState.upgrades[i].name}</div>
        <div class="upgrade__description">${
          saveState.upgrades[i].description
        }</div>
        <div class="upgrade__details">
        <div class="upgrade__cost">Cost: ${saveState.upgrades[i].cost.toFixed(
          0
        )}</div>
        <div class="upgrade__amount">Amount: ${saveState.upgrades[i].amount}/${
      saveState.upgrades[i].max
    }</div>
        </div>
        <button class="upgrade__button" id="upgradebutton${i}" onclick="buyUpgrade(${i})">Upgrade</button>
        </div>
    `;
    if (saveState.upgrades[i].max <= saveState.upgrades[i].amount) {
      document.querySelectorAll(".upgrade__cost")[i].style.display = "none";
      document.querySelectorAll(".upgrade__button")[i].disabled = true;
      document.querySelectorAll(".upgrade__button")[i].innerHTML = "Maxed out!";
    }
  }
}

function buyUpgrade(upgrade) {
  if (saveState.cash >= saveState.upgrades[upgrade].cost) {
    saveState.upgradeTotalAmount++;
    saveState.cash -= saveState.upgrades[upgrade].cost;
    saveState.upgrades[upgrade].amount++;
    saveState.upgrades[upgrade].cost *=
      saveState.upgrades[upgrade].costIncreaser;
    saveState.addCash += saveState.upgrades[upgrade].addCash;
    saveState.cashMultiplier += saveState.upgrades[upgrade].multiplier;
    saveState.multiply *= saveState.upgrades[upgrade].multiply;
    document.getElementsByClassName("upgrade__cost")[
      upgrade
    ].innerHTML = `Cost: ${saveState.upgrades[upgrade].cost.toFixed(0)}`;
    document.getElementsByClassName("upgrade__amount")[
      upgrade
    ].innerHTML = `Amount: ${saveState.upgrades[upgrade].amount}/${saveState.upgrades[upgrade].max}`;
    cashCounter();
    // upgradeChecker();
  }
  if (saveState.upgrades[upgrade].max <= saveState.upgrades[upgrade].amount) {
    document.querySelectorAll(".upgrade__button")[upgrade].disabled = true;
    document.querySelectorAll(".upgrade__button")[upgrade].innerHTML =
      "Maxed out!";
  }
}
