let upgrades = [
  {
    name: "addCash",
    cost: 10,
    amount: 0,
    addCash: 1,
    multiplier: 0,
    description: "Add a extra dollar per second",
  },
  {
    name: "cashMultiplier",
    cost: 100,
    amount: 0,
    addCash: 0,
    multiplier: 0.1,
    description: "Add 0.1$ to the multiplier",
  },
  {
    name: "addCash",
    cost: 10,
    amount: 0,
    addCash: 1,
    multiplier: 0,
    description: "Add a extra dollar per second",
  },
];

for (let i = 0; i < upgrades.length; i++) {
  document.getElementById("upgrades").innerHTML += `
        <div class="upgrade">
        <div class="upgrade-name">${upgrades[i].name}</div>
        <div class="upgrade-cost">Cost: ${upgrades[i].cost}</div>
        <div class="upgrade-amount">Amount: ${upgrades[i].amount}</div>
        <div class="upgrade-description">${upgrades[i].description}</div>
        <button onclick="buyUpgrade(${i})">Upgrade</button>
        </div>
    `;
}

function buyUpgrade(upgrade) {
  if (saveState.cash >= upgrades[upgrade].cost) {
    saveState.cash -= upgrades[upgrade].cost;
    upgrades[upgrade].amount++;
    upgrades[upgrade].cost *= 1.15;
    saveState.addCash += upgrades[upgrade].addCash;
    saveState.cashMultiplier += upgrades[upgrade].multiplier;
    document.getElementsByClassName("upgrade-cost")[
      upgrade
    ].innerHTML = `Cost: ${upgrades[upgrade].cost.toFixed(1)}`;
    document.getElementsByClassName("upgrade-amount")[
      upgrade
    ].innerHTML = `Amount: ${upgrades[upgrade].amount}`;
  }
}
