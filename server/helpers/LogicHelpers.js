module.exports = {
  // Shuffle players after round in order to randomize game further.
  shuffle: function shufflePlayers(players) {
    // Code adapted from Stackoverflow - 'How to randomize (shuffle) a JavaScript array?'. available at:
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let length = players.length - 1;

    for (; length > 0; length--) {
      const j = Math.floor(Math.random() * (length + 1));
      const tempPlayer = players[length];
      players[length] = players[j];
      players[j] = tempPlayer;
    }

    return players;
  },

  // Parse random number for additional function calls.
  randomNumber: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

  // Damage inflicted on player if rolled number is lower than hit chance.
  rollDamageChance: function rollHitChance(hitChance) {
    return this.randomNumber(1, 100) < hitChance ? true : false;
  },

  // Single player has higher chance to dodge hit.
  rollLoneDamageChance: function rollLoneHitChance(hitChance) {
    return this.randomNumber(1, 110) < hitChance ? true : false;
  },
};
