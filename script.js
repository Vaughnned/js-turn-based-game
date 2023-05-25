(function () {
  const attackButton = document.querySelector("#button");

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
      console.log(attackButton);
      console.log(cpu);
      console.log(cpu.healthPointLevel);
      console.log(attackType);
      if (attackType === jev.attack1) {
        cpu.healthPointLevel -= 5;
      } else if (attackType === jev.attack2) {
        cpu.healthPointLevel -= 10;
      } else if (attackType === jev.attack3) {
        cpu.healthPointLevel -= 20;
      }
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
      console.log(jev.healthPointLevel);
    }
  }

  const jev = new Hero();
  const cpu = new Villain();

  attackButton.addEventListener("click", function (attackButton) {
    const value = attackButton.target.value;
    console.log({ value });
    jev.heroAttack(value);
    setTimeout(() => cpu.villainAttack(), 2000);
  });

  //   while (jev.healthPointLevel > 0 && cpu.healthPointLevel > 0) {
  //     cpu.enemyAttack(jev);
  //   }
  //
})();
