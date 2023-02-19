function resetData(reset) {
  switch (reset) {
    case "modalOpen":
      document.getElementById("reset_modal_backdrop").style.display = "block";
      document.getElementById("reset_modal").style.display = "grid";
      break;
    case "modalClose":
      document.getElementById("reset_modal_backdrop").style.display = "none";
      document.getElementById("reset_modal").style.display = "none";
      break;
    case "resetConfirmation":
      localStorage.removeItem("saveState");
      location.reload();
      break;
  }
}
