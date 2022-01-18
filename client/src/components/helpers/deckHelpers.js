import { getRandomInt } from "./gameHelpers";

export function generatePyramidDeck() {
  console.log("generating new deck...");
  let PYRAMID_DECK_CARDS = [];
  let PYRAMID_DECK_CARD_DATA = [
    { name: "deadEnd", target: [0, 1] },
    { name: "gas", target: [0, 1] },
    { name: "lowCeiling", target: [0, 1] },
    { name: "mud", target: [0, 1] },
    { name: "pits", target: [0, 1] },
    { name: "sand", target: [0, 1] },
    { name: "sarcophagus", target: [0, 1] },
    { name: "spears", target: [0, 1] },
    { name: "spikes", target: [0, 1] },
    { name: "treasure", target: [0, 1] },
  ];

  for (let card = 0; card < parseInt(PYRAMID_DECK_CARD_DATA.length); card++) {
    PYRAMID_DECK_CARDS[card] = {
      id: `${PYRAMID_DECK_CARD_DATA[card]}`,
      key: `p-${PYRAMID_DECK_CARD_DATA[card].name}`,
      name: `Pyramid Card ` + PYRAMID_DECK_CARD_DATA[card].name,
      src: "pyramidRoomCard_" + PYRAMID_DECK_CARD_DATA[card].name,
      windowText: PYRAMID_DECK_CARD_DATA[card].name,
      health: getRandomInt(100, 200),
      score: getRandomInt(1, 5),
      damage: getRandomInt(5, 15),
      target: PYRAMID_DECK_CARD_DATA[card].target,
      hitChance: getRandomInt(30, 70),
      completed: false,
      current: false,
    };
  }

  console.log("new deck before shuffle:", PYRAMID_DECK_CARDS);

  return PYRAMID_DECK_CARDS.sort(() => 0.5 - Math.random());

  // Mozilla basic function to return random number. available at:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min);
  // }
  // Loop creates all pyramid room cards for access via game for creation of card components.
}
