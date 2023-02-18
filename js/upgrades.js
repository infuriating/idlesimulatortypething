for (let i = 0; i < saveState.upgrades.length; i++) {
  document.getElementById("upgrades").innerHTML += `
        <div class="upgrade">
        <div class="upgrade__name">${saveState.upgrades[i].name}</div>
        <div class="upgrade__description">${saveState.upgrades[i].description}</div>
        <div class="upgrade__details">
        <div class="upgrade__cost">Cost: ${saveState.upgrades[i].cost}</div>
        <div class="upgrade__amount">Amount: ${saveState.upgrades[i].amount}</div>
        </div>
        <button class="upgrade__button" onclick="buyUpgrade(${i})">Upgrade</button>
        </div>
    `;
}

// setInterval(() => {
//   if (saveState.upgrades[upgrade].cost > saveState.cash) {
//     document.getElementsByClassName("upgrade").style.backgroundColor = "#000";
//     document.getElementsByClassName("upgrade__cost").style.color = "red";
//     document.getElementsByClassName("upgrade__button").style.opacity = "0.5";
//     document.getElementsByClassName("upgrade__button").style.cursor =
//       "not-allowed";
//   }
// }, 50);

function buyUpgrade(upgrade) {
  if (saveState.cash >= saveState.upgrades[upgrade].cost) {
    saveState.cash -= saveState.upgrades[upgrade].cost;
    saveState.upgrades[upgrade].amount++;
    saveState.upgrades[upgrade].cost *=
      saveState.upgrades[upgrade].costIncreaser;
    saveState.addCash += saveState.upgrades[upgrade].addCash;
    saveState.cashMultiplier += saveState.upgrades[upgrade].multiplier;
    saveState.multiply *= saveState.upgrades[upgrade].multiply;
    document.getElementsByClassName("upgrade__cost")[
      upgrade
    ].innerHTML = `Cost: ${saveState.upgrades[upgrade].cost.toFixed(1)}`;
    document.getElementsByClassName("upgrade__amount")[
      upgrade
    ].innerHTML = `Amount: ${saveState.upgrades[upgrade].amount}`;
  }
}
