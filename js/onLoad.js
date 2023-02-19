//loads the data from the local storage
const saveState = {
  addCash: 0.5,
  cash: 0,
  totalCash: 0,
  cashMultiplier: 0.05,
  multiply: 1,
  upgradeTotalAmount: 0,
  upgrades: [
    {
      max: 50,
      name: "Help yourself",
      cost: 10,
      costIncreaser: 1.3,
      amount: 0,
      addCash: 1,
      multiplier: 0,
      multiply: 1,
      description: "Adds a extra dollar per second",
    },
    {
      max: 25,
      name: "MORE! MORE! MORE!",
      cost: 100,
      costIncreaser: 1.2,
      amount: 0,
      addCash: 0,
      multiplier: 0.05,
      multiply: 1,
      description: "Adds 0.05$ to the generator",
    },
    {
      max: 15,
      name: "More money, less problems",
      cost: 750,
      costIncreaser: 1.25,
      amount: 0,
      addCash: 5,
      multiplier: 0,
      multiply: 1,
      description: "Adds 5$ per second",
    },
    {
      max: 20,
      name: "Multiply the Multiplier",
      cost: 2500,
      costIncreaser: 1.55,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.3,
      description: "Adds 30% to the multiplier per upgrade",
    },
    {
      max: 10,
      name: "Helpful.. I guess?",
      cost: 15000,
      costIncreaser: 2,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 2,
      description:
        "Adds 100% to the multiplier per upgrade but has a major price increase",
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
