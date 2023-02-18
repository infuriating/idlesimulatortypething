const saveState = {
  addCash: 1,
  cash: 2,
  cashMultiplier: 0.1,
  upgrades: [
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
  ],
};

setInterval(() => {
  localStorage.setItem("saveState", JSON.stringify(saveState));
}, 1000);

function loadData() {
  let loadState = JSON.parse(localStorage.getItem("saveState"));
  if (loadState !== null) {
    saveState.addCash = loadState.addCash;
    saveState.cash = loadState.cash;
    saveState.cashMultiplier = loadState.cashMultiplier;
    saveState.upgrades = loadState.upgrades;
  }
}
