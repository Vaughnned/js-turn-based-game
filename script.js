(function () {
  const attackButtons = document.querySelectorAll(".attackButton");
  const attackDisplay = document.querySelector(".attackDisplay");

  const maxHP = 150;

  class Player {
    name = "";
    attack1 = "";
    attack2 = "";
    attack3 = "";
    healthPointName = "";
    healthPointLevel = maxHP;
  }

  class Hero extends Player {
    name = "JEV";
    attack1 = "Prettier";
    attack2 = "Debugger";
    attack3 = "Read the Docs";
    healthPointName = "Motivation";
    heroAttack(attackType) {
      attackDisplay.innerText = `JEV ATTACKED WITH ${attackType.toUpperCase()}`;
      console.log("Jev attacked with", attackType);
      if (attackType === jev.attack1) {
        cpu.healthPointLevel -= 5;
      } else if (attackType === jev.attack2) {
        cpu.healthPointLevel -= 10;
      } else if (attackType === jev.attack3) {
        cpu.healthPointLevel -= 20;
      }
      console.log("CPU HP", cpu.healthPointLevel);
    }
  }

  function getRandomIndex(arrLength) {
    return Math.floor(Math.random() * arrLength);
  }

  class Villain extends Player {
    name = "CPU";
    attack1 = "Syntax Errors";
    attack2 = "Bugs";
    attack3 = "Imposter Syndrome";
    healthPointName = "Error Level";
    villainAttack() {
      const attackPoints = [-5, -10, -20];

      jev.healthPointLevel += attackPoints[getRandomIndex(attackPoints.length)];
      attackDisplay.innerText = `CPU STRIKES BACK !`;
      console.log("Jev HP", jev.healthPointLevel);
    }
  }
  const enemyType = ["syntax errors", "bugs", "imposter syndrome"];
  let randomEnemy = "";
  function selectEnemyType() {
    randomEnemy = enemyType[getRandomIndex(enemyType.length)];
    return randomEnemy;
  }
  console.log(selectEnemyType());

  const playerImg = document.querySelector("#player-img");
  const enemyImg = document.querySelector("#enemy-img");

  const attackBtn = document.querySelector("#selectBtn");
  const select = document.querySelector("#select-player-type");

  const jevLevel = document.querySelector("#jevLevel");
  const cpuName = document.querySelector("#cpuName");
  attackBtn.onclick = (event) => {
    event.preventDefault();
    console.log(select.value);
    //playerType = selectBtn.target.value; //Sets player type value so we can access it
    //console.table(playerType);
    if (select.value === "student") {
      playerImg.src = "images/student.png";
      jevLevel.innerText = "Student";
    } else if (select.value === "jr-dev") {
      playerImg.src = "images/jr-dev.jpeg";
      jevLevel.innerText = "Jr. Developer";
    } else if (select.value === "sr-dev") {
      playerImg.src = "images/sr-dev.png";
      jevLevel.innerText = "Sr. Developer";
    }

    selectEnemyType();
    if (randomEnemy === "syntax errors") {
      enemyImg.src = "images/syntax-error.png";
      cpuName.innerText = "Syntax Errors";
    } else if (randomEnemy === "bugs") {
      enemyImg.src = "images/matrix-bug.png";
      cpuName.innerText = "Bugs";
    } else if (randomEnemy === "imposter syndrome") {
      enemyImg.src = "images/imposter-syndrome.jpeg";
      cpuName.innerText = "Imposter Syndrome";
    }

    return randomEnemy;
  };

  const playerHPBar = document.querySelector("#jevHP");
  const cpuHPBar = document.querySelector("#cpuHP");

  const jev = new Hero();
  const cpu = new Villain();
  function calcPercent(player) {
    return player.healthPointLevel / maxHP;
  }
  attackButtons.forEach((btn) => {
    btn.addEventListener("click", function (btn) {
      //attackButton) {
      const value = btn.target.value; //attackButton
      console.log({ value });
      jev.heroAttack(value);
      cpuHPBar.style.width = calcPercent(cpu) * 100 + "%";
      setTimeout(() => {
        cpu.villainAttack();
        playerHPBar.style.width = calcPercent(jev) * 100 + "%";
        if (cpu.healthPointLevel <= 0) {
          alert("You win ! You got rid of all the bugs");
          return;
        } else if (jev.healthPointLevel <= 0) {
          alert("CPU wins- time to take a break");
          return;
        }
      }, 2000);
    });
  });

  //   while (jev.healthPointLevel > 0 && cpu.healthPointLevel > 0) {
  //     cpu.enemyAttack(jev);
  //   }
  //
})();

// function getPlayerType() {
//   selectPlayer = document.querySelector("#select-player-type");
//   output = selectPlayer.options[selectPlayer.selectedIndex].value;
//   document.querySelector(".output").textContent = output;
//   console.log(output);
// }
