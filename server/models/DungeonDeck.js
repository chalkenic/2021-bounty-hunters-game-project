const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DungeonCardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // Determine which deck is being used (e.g. Desert Temple)
  deck: {
    type: String,
    required: true,
  },

  // Short blurb on the card as flavour text.
  description: {
    type: String,
    required: true,
  },

  // What action does the card take on players?
  action: {
    type: Number,
    required: true,
  },

  // How much exploring does the room require?
  strength: {
    type: Number,
    required: true,
  },
});

module.exports = DungeonCards = mongoose.model(
  "dungeonDeck",
  DungeonCardSchema
);
