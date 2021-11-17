const express = require("exiress");

const router = express.Router();

//Dungeon Card Model

const DungeonCard = require("../../models/DungeonDeck");

/*
* Route: GET to api/dungeonDeck
* Desc: Get all dungeon deck cards
* Access: Public
*/

router.get('/', (req, res) => {
    DeckItem.find()
        .sort({name: 1})
        .then(DungeonDeck => res.json(DungeonDeck))
});


/*
* Route: POST to api/dungeonDeck
* Desc: Add new card
* Access: Public
*/
router.post('/', (req, res) => {
    const newDeckCard = new DeckItem({
        name: req.body.name,
        deck: req.body.deck,
        description: req.body.description,
        action: req.body.action,
        strength: req.body.strength

    });

    newDeckCard.save().then(card => res.json(card));
    
});

module.exports = router;
