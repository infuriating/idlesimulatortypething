let crit,
  criticalHit = 1,
  clickerCriticalHit = 1;
criticalHitPopup = document.getElementById("criticalHit");

function criticalHitHandler() {
  crit = Math.floor(Math.random() * 100) + 1;

  if (crit == 69) {
    criticalHit = 10;
    clickerCriticalHit = 5;
    criticalHitPopup.style.display = "flex";
    setTimeout(() => {
      criticalHitPopup.style.display = "none";
    }, 1500);
    setTimeout(() => {
      clickerCriticalHit = 1;
    }, 3000);
  } else {
    criticalHit = 1;
  }
}

setInterval(() => {
  criticalHitHandler();
}, 1000);
