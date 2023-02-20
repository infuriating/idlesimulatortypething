let pointsModalh1 = document.getElementById("rebirth_points_modal_content_h1"),
  pointsModalh3 = document.getElementById("rebirth_points_modal_content_h3"),
  pointsModalh4 = document.getElementById("rebirth_points_modal_content_h4"),
  rebirthPointsDiv = document.getElementById("rebirth"),
  rebirthPointsRender = document.getElementById("rebirth_updater"),
  rebirthPointsUpgrade1Counter = document.getElementById(
    "rebirth_points_upgrade1_counter"
  ),
  rebirthPointsUpgrade2Counter = document.getElementById(
    "rebirth_points_upgrade2_counter"
  ),
  rebirthPointsUpgrade3Counter = document.getElementById(
    "rebirth_points_upgrade3_counter"
  );

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
      if (saveState.rebirths.rebirthPoints.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints.rebirthPoints -= 1;
        saveState.rebirths.rebirthPoints.rebirthPointsMultiplier += 0.1;
        saveState.rebirths.rebirthPoints.rebirthPointsUpgrade1 += 1;
        rebirthPointsUpgrade1Counter.innerHTML = `(${saveState.rebirths.rebirthPoints.rebirthPointsUpgrade1})`;
        break;
      }
    case "upgrade2":
      if (saveState.rebirths.rebirthPoints.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints.rebirthPoints -= 1;
        saveState.rebirths.rebirthPoints.rebirthPointsMultiplier += 0.1;
        saveState.rebirths.rebirthPoints.rebirthPointsUpgrade2 += 1;
        rebirthPointsUpgrade2Counter.innerHTML = `(${saveState.rebirths.rebirthPoints.rebirthPointsUpgrade2})`;
        break;
      }
    case "upgrade3":
      if (saveState.rebirths.rebirthPoints.rebirthPoints >= 1) {
        saveState.rebirths.rebirthPoints.rebirthPoints -= 1;
        saveState.rebirths.rebirthPoints.rebirthPointsMultiplier += 0.1;
        saveState.rebirths.rebirthPoints.rebirthPointsUpgrade3 += 1;
        rebirthPointsUpgrade3Counter.innerHTML = `(${saveState.rebirths.rebirthPoints.rebirthPointsUpgrade3})`;
        break;
      }
  }
  if (saveState.rebirths.rebirthPoints.rebirthPoints >= 1) {
    pointsModalh1.innerHTML = `Rebirth Points: ${saveState.rebirths.rebirthPoints.rebirthPoints}`;
    pointsModalh1.style.color = "fff";
  } else {
    pointsModalh1.innerHTML = "No Rebirth Points";
    pointsModalh1.style.color = "red";
  }
}
