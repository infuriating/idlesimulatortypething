let crit,
  criticalHit = 1,
  criticalHitPopup = document.getElementById("criticalHit");

function criticalHitHandler() {
  crit = Math.floor(Math.random() * 100) + 1;

  if (crit >= 68 && crit <= 70) {
    criticalHit = 10;
    criticalHitPopup.style.display = "flex";
    setTimeout(() => {
      criticalHitPopup.style.display = "none";
    }, 1500);
  } else {
    criticalHit = 1;
  }
}

setInterval(() => {
  criticalHitHandler();
}, 1000);
