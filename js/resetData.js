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
  location.reload();
}
