import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import { margin, minWidth } from "@mui/system";
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

const DeckDropdown = (props) => {
  const classes = useStyles();
  const [deck, setDeck] = React.useState("");

  const handleDeckChange = (event) => {
    setDeck(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="game-deck-label">Game Deck</InputLabel>
        <Select
          labelId="game-deck-label"
          id="game-deck-choice"
          value={deck}
          onChange={handleDeckChange}
        >
          <MenuItem value={"Base"}>Base Dungeon</MenuItem>
          <MenuItem value={"TEMP1"}>UNDER CONSTRUCTION</MenuItem>
          <MenuItem value={"TEMP2"}>UNDER CONSTRUCTION</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DeckDropdown;
