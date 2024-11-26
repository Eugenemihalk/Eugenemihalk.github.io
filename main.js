const btn = document.querySelector(".gaming-space__tap-zone-btn");
const counter = document.querySelector(".gaming-space__counter-coins");
const img = document.querySelector(".gaming-space__tap-zone-img");
const upgrader = document.querySelector(".upgrader-btn");
const upgradePrice = document.querySelector(".upgrader-cost");
const statusOfPlayer = document.querySelector(".ligue-status");


let lvl = 1;

btn.addEventListener("click", function () {
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + lvl;

  img.src = "images/cati-open.jpg";
  setTimeout(() => {
    img.src = "images/cati-close.jpg";
  }, 100);
});

upgrader.addEventListener("click", () => {
  let currentCount = parseInt(counter.textContent, 10);
  let upgradeCost = lvl * 100;

  if (currentCount >= upgradeCost) {
    counter.textContent = currentCount - upgradeCost;
    lvl++;
    upgradePrice.textContent = upgradeCost + 100;
  } else {
    alert(`Вам не хватает: ${upgradeCost - currentCount}`);
  }

  switch (lvl) {
    case 1:
      statusOfPlayer.textContent = "Rookie";
      break;
    case 2:
      statusOfPlayer.textContent = "Kind Person";
      break;
    case 3:
      statusOfPlayer.textContent = "Philanthropist";
      break;
    case 4:
      statusOfPlayer.textContent = "Jesus";
      break;
  }
});