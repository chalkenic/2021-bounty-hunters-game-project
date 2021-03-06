import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
const HomePlayerList = () => {
  const players = useSelector((state) => state.allPlayers.players);

  // List of all players stored within game.
  return (
    <>
      <Grid container spacing={1} item xs={12} sm={12} md={12}>
        {players.map((player) => {
          return (
            <Grid item xs={12} key={player.key}>
              <p>{player.name}</p>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default HomePlayerList;
