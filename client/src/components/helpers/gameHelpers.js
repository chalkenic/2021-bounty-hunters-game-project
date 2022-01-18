export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function rollHitChance(hitChance) {
  return getRandomInt(1, 100) >= hitChance ? true : false;
}

export function checkRoundEnded(cardHealth, progress) {
  return cardHealth > progress ? true : false;
}

export function shufflePlayers(players) {
  // Code adapted from Stackoverflow - 'How to randomize (shuffle) a JavaScript array?'. available at:
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let shuffledPlayers = players
    .map((player) => ({ player, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ player }) => player);

    return shuffledPlayers.sort();
}
