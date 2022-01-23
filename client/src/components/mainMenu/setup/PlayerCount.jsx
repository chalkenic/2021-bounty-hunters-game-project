import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

const PlayerCount = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Player Count</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue={1}>
        <FormControlLabel
          value={1}
          control={<Radio color="primary" />}
          label="One"
          labelPlacement="top"
        />
        <FormControlLabel
          value={2}
          control={<Radio color="primary" />}
          label="Two"
          labelPlacement="top"
        />
        <FormControlLabel
          value={3}
          control={<Radio color="primary" />}
          label="Three"
          labelPlacement="top"
        />
        <FormControlLabel
          value={4}
          control={<Radio color="primary" />}
          label="Four"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default PlayerCount;
