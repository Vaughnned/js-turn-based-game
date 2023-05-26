(function () {
  const attackButtons = document.querySelectorAll(".button");
  console.log(attackButtons);

  class Player {
    name = "";
    attack1 = "";
    attack2 = "";
    attack3 = "";
    healthPointName = "";
    healthPointLevel = 50;
  }

  class Hero extends Player {
    name = "JEV";
    attack1 = "Prettier";
    attack2 = "Debugger";
    attack3 = "Read the Docs";
    healthPointName = "Motivation";
    heroAttack(attackType) {
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

  function getRandomIndex() {
    return Math.floor(Math.random() * 3);
  }

  class Villain extends Player {
    name = "CPU";
    attack1 = "Syntax Errors";
    attack2 = "Bugs";
    attack3 = "Imposter Syndrome";
    healthPointName = "Error Level";
    villainAttack() {
      const attackPoints = [-5, -10, -20];

      jev.healthPointLevel += attackPoints[getRandomIndex()];
      console.log("Jev HP", jev.healthPointLevel);
    }
  }

  // function getPlayerType() {
  //   selectPlayer = document.querySelector("#select-player-type");
  //   output = selectPlayer.options[selectPlayer.selectedIndex].value;
  //   document.querySelector(".output").textContent = output;
  //   console.log(output);
  // }

  const btn = document.querySelector("#btn");
  const sb = document.querySelector("#select-player-type");
  btn.onclick = (event) => {
    event.preventDefault();
    alert(sb.value);
  };
  const jev = new Hero();
  const cpu = new Villain();

  attackButtons.forEach((btn) => {
    btn.addEventListener("click", function (btn) {
      //attackButton) {
      const value = btn.target.value; //attackButton
      console.log({ value });
      jev.heroAttack(value);
      setTimeout(() => {
        cpu.villainAttack();
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
