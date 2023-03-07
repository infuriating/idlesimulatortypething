let pointsModalh1 = document.getElementById("upgrade_points_modal_content_h1"),
  pointsModalh3 = document.getElementById("upgrade_points_modal_content_h3"),
  pointsModalh4 = document.getElementById("upgrade_points_modal_content_h4"),
  upgradePointsDiv = document.getElementById("rebirth"),
  upgradePointsRender = document.getElementById("rebirth_updater"),
  mobileUpgradePointsButton = document.getElementById(
    "mobile_upgrade_points_button"
  ),
  upgradePointsButton = document.getElementById("upgrade_points_button"),
  upgradePointsUpgrade1Counter = document.getElementById(
    "upgrade_points_upgrade1_counter"
  ),
  upgradePointsUpgrade2Counter = document.getElementById(
    "upgrade_points_upgrade2_counter"
  ),
  upgradePointsUpgrade3Counter = document.getElementById(
    "upgrade_points_upgrade3_counter"
  );

function upgradePoints(distribute) {
  checkUpgradePoints();
  switch (distribute) {
    case "modalOpen":
      document.getElementById("modal_backdrop").style.display = "block";
      document.getElementById("upgrade_points_modal").style.display = "grid";
      break;
    case "modalClose":
      document.getElementById("modal_backdrop").style.display = "none";
      document.getElementById("upgrade_points_modal").style.display = "none";
      break;
    case "upgrade1":
      if (saveState.upgradePoints.upgradePoints >= 1) {
        saveState.upgradePoints.upgradePoints -= 1;
        saveState.upgradePoints.upgradePointsMultiplier += 0.1;
        saveState.upgradePoints.upgradePointsUpgrade1 += 1;
        upgradePointsUpgrade1Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade1})`;
        break;
      }
    case "upgrade2":
      if (saveState.upgradePoints.upgradePoints >= 1) {
        saveState.upgradePoints.upgradePoints -= 1;
        saveState.upgradePoints.upgradePointsMultiplier += 0.1;
        saveState.upgradePoints.upgradePointsUpgrade2 += 1;
        upgradePointsUpgrade2Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade2})`;
        break;
      }
    case "upgrade3":
      if (saveState.upgradePoints.upgradePoints >= 1) {
        saveState.upgradePoints.upgradePoints -= 1;
        saveState.upgradePoints.upgradePointsMultiplier += 0.1;
        saveState.upgradePoints.upgradePointsUpgrade3 += 1;
        upgradePointsUpgrade3Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade3})`;
        break;
      }
  }
  if (saveState.upgradePoints.upgradePoints >= 1) {
    pointsModalh1.innerHTML = `Upgrade Points: ${saveState.upgradePoints.upgradePoints}`;
    pointsModalh1.style.color = "fff";
  } else {
    pointsModalh1.innerHTML = "No Upgrade Points";
    pointsModalh1.style.color = "red";
  }
}

function checkUpgradePoints() {
  if (
    saveState.upgradePoints.upgradePoints == 0 &&
    saveState.upgradePoints.upgradePointsUpgrade1 == 0 &&
    saveState.upgradePoints.upgradePointsUpgrade2 == 0 &&
    saveState.upgradePoints.upgradePointsUpgrade3 == 0
  ) {
    mobileUpgradePointsButton.style.display = "none";
    upgradePointsButton.style.display = "none";
  }

  if (saveState.upgradePoints.upgradePoints >= 1) {
    pointsModalh1.innerHTML = `Upgrade Points: ${saveState.upgradePoints.upgradePoints}`;
    pointsModalh1.style.color = "fff";
  } else {
    pointsModalh1.innerHTML = "No Upgrade Points";
    pointsModalh1.style.color = "red";
  }
  pointsModalh3.innerHTML = `Upgrade Points Multiplier: ${saveState.upgradePoints.upgradePointsMultiplier.toFixed(
    2
  )}x`;
  upgradePointsUpgrade1Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade1})`;
  upgradePointsUpgrade2Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade2})`;
  upgradePointsUpgrade3Counter.innerHTML = `(${saveState.upgradePoints.upgradePointsUpgrade3})`;
}
