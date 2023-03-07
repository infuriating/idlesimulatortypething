let time = new Date(),
  hour = time.getHours(),
  minute = time.getMinutes(),
  second = time.getSeconds();

let randomMission = Math.floor(Math.random() * 5),
  randomMission2 = Math.floor(Math.random() * 5),
  randomMission3 = Math.floor(Math.random() * 5);

let dailyMissionContainer = document.querySelector(".daily_mission_container"),
  dailyMissionTimer = document.getElementById("daily_mission_timer"),
  dailyMissionButton = document.getElementById("daily_mission_button"),
  dailyMission1Name = document.getElementById("daily_mission_1_name"),
  dailyMission1Progress = document.getElementById("daily_mission_1_progress"),
  dailyMission1Reward = document.getElementById("daily_mission_1_reward"),
  dailyMission2Name = document.getElementById("daily_mission_2_name"),
  dailyMission2Progress = document.getElementById("daily_mission_2_progress"),
  dailyMission2Reward = document.getElementById("daily_mission_2_reward"),
  dailyMission3Name = document.getElementById("daily_mission_3_name"),
  dailyMission3Progress = document.getElementById("daily_mission_3_progress"),
  dailyMission3Reward = document.getElementById("daily_mission_3_reward");

function setDailyMissions() {
  updateDailyMissions();
  checkDailyMissionDuplicates();
}

function dailyMissions(mission) {
  switch (mission) {
    case "collectReward": {
      saveState.dailyMissions.dailyMissionMultiplier += 0.1;
      if (
        saveState.dailyMissions.missions[randomMission].upgradePoint === true
      ) {
        saveState.upgradePoints += 1;
      }
      break;
    }
    case "openMenu": {
      dailyMissionContainer.style.display = "flex";
      dailyMissionButton.setAttribute("onclick", "dailyMissions('closeMenu')");
      break;
    }
    case "closeMenu": {
      dailyMissionContainer.style.display = "none";
      dailyMissionButton.setAttribute("onclick", "dailyMissions('openMenu')");
      break;
    }
  }
}

function updateDailyMissions() {
  dailyMission1Name.innerHTML =
    saveState.dailyMissions.missions[randomMission].name;
  dailyMission1Reward.innerHTML =
    saveState.dailyMissions.missions[randomMission].reward;
  dailyMission2Name.innerHTML =
    saveState.dailyMissions.missions[randomMission2].name;
  dailyMission2Reward.innerHTML =
    saveState.dailyMissions.missions[randomMission2].reward;
  dailyMission3Name.innerHTML =
    saveState.dailyMissions.missions[randomMission3].name;
  dailyMission3Reward.innerHTML =
    saveState.dailyMissions.missions[randomMission3].reward;
}

function checkDailyMissionDuplicates() {
  if (randomMission === randomMission2) {
    randomMission2 = Math.floor(Math.random() * 5) + 1;
    checkDailyMissionDuplicates();
  }
  if (randomMission === randomMission3) {
    randomMission3 = Math.floor(Math.random() * 5) + 1;
    checkDailyMissionDuplicates();
  }
  if (randomMission2 === randomMission3) {
    randomMission3 = Math.floor(Math.random() * 5) + 1;
    checkDailyMissionDuplicates();
  }
}

function timing() {
  dailyMissionTimer.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(() => {
  timing();
}, 1000);
