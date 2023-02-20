//loads the data from the local storage
const saveState = {
  addCash: 0.5,
  cash: 0,
  totalCash: 0,
  cashMultiplier: 0.05,
  multiply: 1,
  upgradeTotalAmount: 0,
  rebirths: {
    rebirth: 0,
    rebirthMultiplier: 1,
  },
  upgrades: [
    {
      max: 50,
      name: "Help yourself",
      baseCost: 10,
      cost: 10,
      costIncreaser: 1.25,
      amount: 0,
      addCash: 1,
      multiplier: 0,
      multiply: 1,
      description: "Adds a extra dollar per second",
    },
    {
      max: 25,
      name: "MORE! MORE! MORE!",
      baseCost: 100,
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
      baseCost: 750,
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
      baseCost: 2500,
      cost: 2500,
      costIncreaser: 1.55,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.3,
      description: "Adds 30% to the multiplier",
    },
    {
      max: 25,
      name: "Mr Burns' Money Machine",
      baseCost: 7500,
      cost: 7500,
      costIncreaser: 1.4,
      amount: 0,
      addCash: 0,
      multiplier: 0.25,
      multiply: 1,
      description: "Adds 0.25$ to the generator",
    },
    {
      max: 10,
      name: "Helpful.. I guess?",
      baseCost: 20000,
      cost: 20000,
      costIncreaser: 2,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 2,
      description: "Adds 100% to the multiplier",
    },
    // {
    //   max: 20,
    //   name: "The Money Tree",
    //   baseCost: 50000,
    //   cost: 50000,
    //   costIncreaser: 1.6,
    //   amount: 0,
    //   addCash: 0,
    //   multiplier: 0.5,
    //   multiply: 0,
    //   description: "REBIRTH 1 UPGRADE: Adds 0.50$ to the generator",
    // },
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
    saveState.rebirths = loadState.rebirths;
  }
}
