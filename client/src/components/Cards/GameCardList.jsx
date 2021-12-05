let GameCardList = [];

for (let index = 1; index < 6; index++) {
  let cardName = "playerCard_" + index;
  PlayingCardList.push({
    id: index,
    cardName: cardName,
    src: "./CardImages/" + cardName + ".svg",
  });
  console.log(cardName + " created...");
}
// let playerCardValue = [5];
// let playerCardCount = [5];

// let addPlayerCards = (i, PlayingCardList) => {
//   var counter = 1;
//   for (let card of playerCardCount) {
//     PlayingCardList.push({id: {counter}, cardName: 'playerCard_' + card.valueOf(), cardValue: card.valueOf()})

//     // PlayingCardList[card] = require("./CardImages/playerCard_" + i + ".svg");
//   }
// };

// for (let cardCountArray = 0; cardCountArray < playerCardCount.length; cardCountArray++) {
//   for (let card = 0; card < cardCountArray.valueOf(); card++) {
//     addPlayerCards(card, PlayingCardList);
//     console.log(card);
//   }
// }

export default GameCardList;
