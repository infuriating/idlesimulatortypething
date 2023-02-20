let pointsModalh1 = document.getElementById("rebirth_points_modal_content_h1"),
  pointsModalh3 = document.getElementById("rebirth_points_modal_content_h3"),
  pointsModalh4 = document.getElementById("rebirth_points_modal_content_h4"),
  rebirthPointsDiv = document.getElementById("rebirth"),
  rebirthPointsRender = document.getElementById("rebirth_updater");

function rebirthPoints(distribute) {
  switch (distribute) {
    case "modalOpen":
      document.getElementById("modal_backdrop").style.display = "block";
      document.getElementById("rebirth_points_modal").style.display = "grid";
      break;
    case "modalClose":
      document.getElementById("modal_backdrop").style.display = "none";
      document.getElementById("rebirth_points_modal").style.display = "none";
      break;
    case "upgrade1":
      if (saveState.rebirths.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints -= 1;
        saveState.rebirths.rebirthPointsMultiplier += 0.1;
        break;
      }
    case "upgrade2":
      if (saveState.rebirths.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints -= 1;
        saveState.rebirths.rebirthPointsMultiplier += 0.1;
        break;
      }
    case "upgrade3":
      if (saveState.rebirths.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints -= 1;
        saveState.rebirths.rebirthPointsMultiplier += 0.1;
        break;
      }
  }
  if (saveState.rebirths.rebirthPoints >= 1) {
    pointsModalh1.innerHTML = `Rebirth Points: ${saveState.rebirths.rebirthPoints}`;
  } else {
    pointsModalh1.innerHTML = "No Rebirth Points";
  }
}
