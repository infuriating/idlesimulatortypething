const saveState = {
  addCash: 1,
  cash: 2,
  cashMultiplier: 0.1,
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
  }
}
