function resetDataModalShow() {
  document.getElementById("reset_modal_backdrop").style.display = "block";
  document.getElementById("reset_modal").style.display = "grid";
}

function resetDataModalClose() {
  document.getElementById("reset_modal_backdrop").style.display = "none";
  document.getElementById("reset_modal").style.display = "none";
}

function resetData() {
  localStorage.removeItem("saveState");
  // saveState.cash = 0;
  // saveState.addCash = 1;
  // saveState.cashMultiplier = 0.1;
  // localStorage.setItem("saveState", JSON.stringify(saveState));
  location.reload();
}
