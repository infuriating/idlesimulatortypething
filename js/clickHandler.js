let clickerPopup = document.getElementById("clickerPopup");

function clicker() {
  saveState.cash += (saveState.addCash / 3) * clickerCriticalHit;
  cashCounter();
  let createPopup = document.createElement("div");
  createPopup.classList.add("clickerPopup");
  createPopup.innerHTML = "+$" + parseFloat(saveState.addCash / 3).toFixed(2);
  createPopup.style.top = `${event.clientY}px`;
  createPopup.style.left = `${event.clientX}px`;
  document.getElementById("clicker").appendChild(createPopup);
  setTimeout(() => {
    createPopup.remove();
  }, 1500);
}
