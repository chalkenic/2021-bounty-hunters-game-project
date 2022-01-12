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
