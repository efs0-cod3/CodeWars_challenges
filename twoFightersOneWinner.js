function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const f = fighter1;
  const f2 = fighter2;
  let secondAttacker;

  if (f.name === firstAttacker) {
    firstAttacker = f;
    secondAttacker = f2;
  } else {
    firstAttacker = f2;
    secondAttacker = f;
  }

  while (f.health > 0 && f2.health > 0) {
    secondAttacker.health -= firstAttacker.damagePerAttack;
    if (secondAttacker.health <= 0) {
      return firstAttacker.name;
    }

    firstAttacker.health -= secondAttacker.damagePerAttack;
    if (firstAttacker.health <= 0) {
      return secondAttacker.name;
    }
  }
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4));
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4));
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4));
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4));
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5));
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5));