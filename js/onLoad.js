const saveState = {
  addCash: 1,
  cash: 2,
  cashMultiplier: 0.1,
  multiply: 1,
  upgrades: [
    {
      name: "Help yourself",
      cost: 10,
      amount: 0,
      addCash: 1,
      multiplier: 0,
      multiply: 1,
      description: "Add a extra dollar per second",
    },
    {
      name: "Faster!",
      cost: 100,
      amount: 0,
      addCash: 0,
      multiplier: 0.1,
      multiply: 1,
      description: "Add 0.1$ to the multiplier",
    },
    {
      name: "Multiply the Multiplier",
      cost: 1000,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.2,
      description: "Increase the multiplier by 20% per upgrade",
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
    saveState.multiply = loadState.multiply;
    saveState.upgrades = loadState.upgrades;
  }
}
