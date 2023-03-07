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
    rebirthCost: 1000000,
  },
  upgradePoints: {
    upgradePoints: 0,
    upgradePointsMultiplier: 1,
    upgradePointsUpgrade1: 0,
    upgradePointsUpgrade2: 0,
    upgradePointsUpgrade3: 0,
  },
  upgrades: [
    {
      max: 25,
      rebirthMinimum: 0,
      name: "Help yourself",
      baseCost: 10,
      cost: 10,
      costIncreaser: 1.5,
      amount: 0,
      addCash: 0.25,
      multiplier: 0,
      multiply: 1,
      description: "Adds $0.25 per second",
    },
    {
      max: 25,
      rebirthMinimum: 0,
      name: "MORE! MORE! MORE!",
      baseCost: 100,
      cost: 100,
      costIncreaser: 1.4,
      amount: 0,
      addCash: 0,
      multiplier: 0.025,
      multiply: 1,
      description: "Adds $0.025 to the generator",
    },
    {
      max: 25,
      rebirthMinimum: 0,
      name: "More money, less problems",
      baseCost: 750,
      cost: 750,
      costIncreaser: 1.325,
      amount: 0,
      addCash: 1,
      multiplier: 0,
      multiply: 1,
      description: "Adds $1 per second",
    },
    {
      max: 20,
      rebirthMinimum: 0,
      name: "Multiply the Multiplier",
      baseCost: 2500,
      cost: 2500,
      costIncreaser: 1.4,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.03,
      description: "Adds 3% to the multiplier",
    },
    {
      max: 20,
      rebirthMinimum: 0,
      name: "Mr Burns' Money Machine",
      baseCost: 7500,
      cost: 7500,
      costIncreaser: 1.4,
      amount: 0,
      addCash: 0,
      multiplier: 0.1,
      multiply: 1,
      description: "Adds $0.10 to the generator",
    },
    {
      max: 10,
      rebirthMinimum: 0,
      name: "Helpful.. I guess?",
      baseCost: 25000,
      cost: 25000,
      costIncreaser: 1.75,
      amount: 0,
      addCash: 0,
      multiplier: 0,
      multiply: 1.1,
      description: "Adds 10% to the multiplier",
    },
    {
      max: 10,
      rebirthMinimum: 1,
      name: "The Money Tree",
      baseCost: 100000,
      cost: 100000,
      costIncreaser: 1.7,
      amount: 0,
      addCash: 0,
      multiplier: 0.3,
      multiply: 1,
      description: "REBIRTH 1 UPGRADE: Adds 0.30$ to the generator",
    },
  ],
  dailyMissions: {
    dailyMissionMultiplier: 1,
    missions: [
      {
        id: 1,
        name: "Daily Mission 1",
        reward: "Permanent 1.1x Multiplier",
        upgradePoint: true,
      },
      {
        id: 2,
        name: "Daily Mission 2",
        reward: "Permanent 1.1x Multiplier",
        upgradePoint: false,
      },
      {
        id: 3,
        name: "Daily Mission 3",
        reward: "Permanent 1.1x Multiplier",
        upgradePoint: false,
      },
      {
        id: 4,
        name: "Daily Mission 4",
        reward: "Permanent 1.1x Multiplier",
        upgradePoint: true,
      },
      {
        id: 5,
        name: "Daily Mission 5",
        reward: "Permanent 1.1x Multiplier",
        upgradePoint: false,
      },
    ],
  },
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
    saveState.upgradePoints = loadState.upgradePoints;
    saveState.dailyMissions = loadState.dailyMissions;
  }
}
