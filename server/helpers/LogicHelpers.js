module.exports = {
  shuffle: function shufflePlayers(players) {
    // Code adapted from Stackoverflow - 'How to randomize (shuffle) a JavaScript array?'. available at:
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let shuffledPlayers = players
      .map((player) => ({ player, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ player }) => player);

    return shuffledPlayers.sort();
  },

  randomNumber: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },

  rollDamageChance: function rollHitChance(hitChance) {
    return this.randomNumber(1, 100) >= hitChance ? true : false;
  },
};
