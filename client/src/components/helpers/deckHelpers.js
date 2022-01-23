import { getRandomInt } from "./gameHelpers";

export function generatePyramidDeck() {
  console.log("generating room deck...");
  let PYRAMID_DECK_CARDS = [];
  let PYRAMID_DECK_CARD_DATA = [
    { name: "deadEnd", target: ["1"], healthMod: 3, hitMod: 4, dmgMod: 1 },
    { name: "gas", target: ["1"], healthMod: 17, hitMod: 7, dmgMod: 1 },
    { name: "lowCeiling", target: ["0"], healthMod: 40, hitMod: 2, dmgMod: 1 },
    { name: "mud", target: ["0"], healthMod: 48, hitMod: 2, dmgMod: 1 },
    { name: "pits", target: ["1"], healthMod: 9, hitMod: 4, dmgMod: 1.5 },
    { name: "sand", target: ["0"], healthMod: 50, hitMod: 0, dmgMod: 1.5 },
    {
      name: "sarcophagus",
      target: ["0", "1"],
      healthMod: 1,
      hitMod: 7,
      dmgMod: 1,
    },
    { name: "spears", target: ["0", "1"], healthMod: 14, hitMod: 5, dmgMod: 1 },
    { name: "spikes", target: ["0", "1"], healthMod: 13, hitMod: 4, dmgMod: 1 },
    {
      name: "treasure",
      target: ["0", "1"],
      healthMod: 70,
      hitMod: 2,
      dmgMod: 1.5,
    },
  ];

  for (let card = 0; card < parseInt(PYRAMID_DECK_CARD_DATA.length); card++) {
    let damage = Math.round(
      getRandomInt(3, 10) * PYRAMID_DECK_CARD_DATA[card].dmgMod
    );
    let hitChance = getRandomInt(25, 50) + PYRAMID_DECK_CARD_DATA[card].hitMod;
    let health = 0;
    if (damage < 5 && hitChance < 30) {
      health = getRandomInt(230, 350) + PYRAMID_DECK_CARD_DATA[card].healthMod;
    } else {
      health = getRandomInt(120, 180) + PYRAMID_DECK_CARD_DATA[card].healthMod;
    }

    PYRAMID_DECK_CARDS[card] = {
      id: `${PYRAMID_DECK_CARD_DATA[card]}`,
      key: `p-${PYRAMID_DECK_CARD_DATA[card].name}`,
      name: `Pyramid Card ` + PYRAMID_DECK_CARD_DATA[card].name,
      src: "pyramidRoomCard_" + PYRAMID_DECK_CARD_DATA[card].name,
      windowText: PYRAMID_DECK_CARD_DATA[card].name,
      health: health,
      score: getRandomInt(1, 5),
      damage: damage,
      target: PYRAMID_DECK_CARD_DATA[card].target,
      hitChance: hitChance,
      completed: false,
      current: false,
    };
  }

  return PYRAMID_DECK_CARDS.sort(() => 0.5 - Math.random());
}

export function generatePlayerDeck() {
  console.log("generating player deck...");
  let PLAYER_CARD_VALUES = [0, 2, 5, 10, 15, 20, 25, 30, 35, 40];
  let PLAYER_CARD_COUNT = [2, 7, 10, 14, 13, 11, 7, 5, 4, 2];
  let PLAYER_CARDS = [];

  let cardDeckSize = 0;

  for (let cardTotal = 0; cardTotal < PLAYER_CARD_VALUES.length; cardTotal++) {
    for (
      let cardCounter = 0;
      cardCounter < PLAYER_CARD_COUNT[cardTotal];
      cardCounter++
    ) {
      PLAYER_CARDS[cardDeckSize] = {
        id: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
        key: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
        name: "Player Card" + PLAYER_CARD_VALUES[cardTotal],
        src: "playerCard_" + PLAYER_CARD_VALUES[cardTotal],
        alt: "Player Card " + PLAYER_CARD_VALUES[cardTotal] + " image",
        count: `${PLAYER_CARD_COUNT[cardTotal]}`,
        value: `${PLAYER_CARD_VALUES[cardTotal]}`,
        clicked: false,
      };
      cardDeckSize++;
    }
  }

  return PLAYER_CARDS.sort(() => 0.5 - Math.random());
}
