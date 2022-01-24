import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

const ColoredLabel = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(InputLabel);

// BEYOND MVP - Choose card deck to use.
const DeckDropdown = () => {
  const classes = useStyles();
  const [deck, setDeck] = React.useState("");

  const handleDeckChange = (event) => {
    setDeck(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <ColoredLabel id="game-deck-label">Game Deck</ColoredLabel>
        <Select
          labelId="game-deck-label"
          id="game-deck-choice"
          value={deck}
          onChange={handleDeckChange}
        >
          <MenuItem value={"Base"}>Pyramid</MenuItem>
          <MenuItem value={"TEMP1"}>DLC</MenuItem>
          <MenuItem value={"TEMP2"}>DLC</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DeckDropdown;
