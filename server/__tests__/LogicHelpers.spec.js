var helpers = require("../helpers/LogicHelpers.js");
index = 0;
const testPlayers = [];
let progress = {};
let testCard = {};
beforeEach(() => {
  for (let index = 0; index < 200; index++) {
    testPlayers[index] = {
      key: index,
      id: index,
      playerName: "Player" + index,
      src: "na",
      alt: "na",
      score: 0,
      energy: 100,
      turn: null,
      turnHasEnded: false,
      master: index,
      chosenCardValue: 0,
      knockedOut: false,
    };
  }
  testCard = {
    id: 0,
    key: 0,
    name: "Test card",
    src: "pyramidRoomCard_test",
    windowText: "Test card",
    health: 200,
    score: 3,
    damage: 10,
    target: ["1", "2"],
    hitChance: 0,
    completed: false,
    current: false,
  };
  progress = { value: 0, max: 100 };
});

test("Sanity check of players created", () => {
  expect(testPlayers).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 0 }),
      expect.objectContaining({ id: 1 }),
    ])
  );
});

test("Check if players are shuffled after every turn", () => {
  const expectedName = testPlayers[0].playerName;
  let shuffledPlayers = helpers.shuffle(testPlayers);

  const actualName = shuffledPlayers[0].playerName;

  expect(shuffledPlayers).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 0 }),
      expect.objectContaining({ id: 1 }),
    ])
  );

  // Check names of players at array 1.
  expect(expectedName).toEqual(expect.not.stringMatching(actualName));
});

test("Test if player can get hit.", () => {
  expect(helpers.rollHitChance(100)).toEqual(true);
});

test("Test if player can dodge a hit.", () => {
  expect(helpers.rollLoneHitChance(0)).toEqual(false);
});

test("Test if random number returned is between 2 parsed values", () => {
  expect(helpers.randomNumber(2, 10)).toBeGreaterThanOrEqual(2);
  expect(helpers.randomNumber(2, 10)).toBeLessThanOrEqual(10);
});

test("Test update bar function increases by value provided", () => {
  expect(progress.value).toBe(0);
  progress.value = helpers.increaseProgress(progress.value, 10);
  expect(progress.value).toBe(10);
});

test("Test Both players losing hp from hit chance", () => {
  testCard.hitChance = 100;

  //Confirm player energy begins at 100.
  let p1Energy = testPlayers[0].energy;
  let p2Energy = testPlayers[1].energy;
  expect(p1Energy).toEqual(100);
  expect(p2Energy).toEqual(100);

  // Card will always hit both players for 10 energy each.
  for (let index = 0; index < 2; index++) {
    testPlayers[index] = helpers.rollDamage(
      testPlayers[index],
      index + 1,
      testCard
    );
  }

  // Confirm both players do not end the round with max energy.
  expect(p1Energy).not.toBe(testPlayers[0].energy);
  expect(p2Energy).not.toBe(testPlayers[1].energy);
});

test("Test for only player 1 losing hp from hit chance", () => {
  testCard.hitChance = 100;
  testCard.target = ["1"];

  let p1Energy = testPlayers[0].energy;
  let p2Energy = testPlayers[1].energy;
  expect(p1Energy).toEqual(100);
  expect(p2Energy).toEqual(100);

  for (let index = 0; index < 3; index++) {
    testPlayers[index] = helpers.rollDamage(
      testPlayers[index],
      index + 1,
      testCard
    );
  }

  expect(p1Energy).not.toBe(testPlayers[0].energy);
  expect(p2Energy).toBe(testPlayers[1].energy);
  expect(p1Energy).toBe(testPlayers[2].energy);
});

test("Test for no players damaged if roll above hit chance", () => {
  testCard.hitChance = 0;

  //Confirm player energy begins at 100.
  let p1Energy = testPlayers[0].energy;
  let p2Energy = testPlayers[1].energy;

  // Card will always hit both players for 10 energy each.
  for (let index = 0; index < 2; index++) {
    testPlayers[index] = helpers.rollDamage(
      testPlayers[index],
      index + 1,
      testCard
    );
  }

  // Confirm both players do not end the round with max energy.
  expect(p1Energy).toBe(testPlayers[0].energy);
  expect(p2Energy).toBe(testPlayers[1].energy);
});

test("Test to reset progress bar and provide new health maximum.", () => {
  progress.value = progress.max;
  expect(progress.value).toBe(100);
  expect(progress.max).toBe(100);

  progress = helpers.resetProgress(progress, 200);

  expect(progress.value).toBe(0);
  expect(progress.max).toBe(200);
});
