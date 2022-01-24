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
  rollHitChance: function rollHitChance(hitChance) {
    return this.randomNumber(1, 100) < hitChance ? true : false;
  },

  // Single player has higher chance to dodge hit.
  rollLoneHitChance: function rollLoneHitChance(hitChance) {
    return this.randomNumber(1, 110) < hitChance ? true : false;
  },

  applyScore: function increasePlayerScore(player, score) {
    player.score += parseInt(score);

    return player;
  },

  // Reset game to new round
  resetProgress: function resetProgressBar(progress, health) {
    progress.value = 0;
    progress.max = health;

    return progress;
  },

  increaseProgress: function increaseProgressBar(progress, health) {
    return (progress += health);
  },

  // Rolls damage chance against selected player.
  rollDamage: function rollDamageChance(player, position, roomCard) {
    // If a player joins game in progress, game will always attempt to attack player at turn 1 until round ends.
    // Proceeds as normal when new round begins.
    try {
      var playerHit = false;
      console.log("got here", roomCard);
      if (roomCard.target.includes(String(position))) {
        playerHit = this.rollHitChance(roomCard.hitChance);
        console.log("got here 2", playerHit);
        var random = this.rollHitChance(roomCard.hitChance);
        console.log(random, "test");

        if (playerHit) {
          console.log("got here 3");
          if (playerHit) {
            player.energy -= parseInt(roomCard.damage);
            player.receivedDamage = true;

            if (player.energy <= 0) {
              player.score = 0;
              player.energy = 100;
            }
          }
        }
      }
      return player;
    } catch {
      var playerHit = false;
      if (position == 1) {
        playerHit = this.rollHitChance(roomCard.hitChance);
        if (playerHit) {
          player.energy -= parseInt(currentRoomCard.damage);
          player.receivedDamage = true;

          if (player.energy <= 0) {
            player.score = 0;
            player.energy = 100;
          }
        }
      }
    }
    return player;
  },

  rollLoneDamage: function rollLoneDamageChance(player, roomCard) {
    playerHit = this.rollLoneHitChance(roomCard.hitChance);

    if (playerHit) {
      player.energy -= parseInt(currentRoomCard.damage);
      player.receivedDamage = true;
      if (player.energy <= 0) {
        player.score = 0;
        player.energy = 100;
      }
    }
    return player;
  },
};
