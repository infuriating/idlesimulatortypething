//loads the data from the local storage
const saveState = {
  addCash: 1,
  cash: 0,
  totalCash: 0,
  cashMultiplier: 0.1,
  multiply: 1,
  upgradeTotalAmount: 0,
  upgrades: [
    {
      max: 10,
      name: "Help yourself",
      cost: 10,
      costIncreaser: 1.2,
      amount: 0,
      addCash: 1,
      multiplier: 0,
      multiply: 1,
      description: "Add a extra dollar per second",
    },
    {
      max: 25,
      name: "Faster!",
      cost: 100,
      costIncreaser: 1.2,
      amount: 0,
      addCash: 0,
      multiplier: 0.1,
      multiply: 1,
      description: "Add 0.1$ to the multiplier",
    },
    {
      max: 10,
      name: "Multiply the Multiplier",
      cost: 1000,
      costIncreaser: 1.5,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.2,
      description: "Multiplies the multiplier by 20% per upgrade",
    },
  ],
};

// saves data to local storage every second
setInterval(() => {
  localStorage.setItem("saveState", JSON.stringify(saveState));
}, 1000);

// loads everything from saveState on pageload
function loadData() {
  let loadState = JSON.parse(localStorage.getItem("saveState"));
  if (loadState !== null) {
    saveState.addCash = loadState.addCash;
    saveState.cash = loadState.cash;
    saveState.totalCash = loadState.totalCash;
    saveState.cashMultiplier = loadState.cashMultiplier;
    saveState.multiply = loadState.multiply;
    saveState.upgrades = loadState.upgrades;
    saveState.upgradeTotalAmount = loadState.upgradeTotalAmount;
  }
}
