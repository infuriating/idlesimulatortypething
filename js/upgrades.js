for (let i = 0; i < saveState.upgrades.length; i++) {
  document.getElementById("upgrades").innerHTML += `
        <div class="upgrade">
        <div class="upgrade-name">${saveState.upgrades[i].name}</div>
        <div class="upgrade-cost">Cost: ${saveState.upgrades[i].cost}</div>
        <div class="upgrade-amount">Amount: ${saveState.upgrades[i].amount}</div>
        <div class="upgrade-description">${saveState.upgrades[i].description}</div>
        <button onclick="buyUpgrade(${i})">Upgrade</button>
        </div>
    `;
}

function buyUpgrade(upgrade) {
  if (saveState.cash >= saveState.upgrades[upgrade].cost) {
    saveState.cash -= saveState.upgrades[upgrade].cost;
    saveState.upgrades[upgrade].amount++;
    saveState.upgrades[upgrade].cost *=
      saveState.upgrades[upgrade].costIncreaser;
    saveState.addCash += saveState.upgrades[upgrade].addCash;
    saveState.cashMultiplier += saveState.upgrades[upgrade].multiplier;
    saveState.multiply *= saveState.upgrades[upgrade].multiply;
    document.getElementsByClassName("upgrade-cost")[
      upgrade
    ].innerHTML = `Cost: ${saveState.upgrades[upgrade].cost.toFixed(1)}`;
    document.getElementsByClassName("upgrade-amount")[
      upgrade
    ].innerHTML = `Amount: ${saveState.upgrades[upgrade].amount}`;
  }
}
