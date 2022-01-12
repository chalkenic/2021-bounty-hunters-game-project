import { io } from "socket.io-client";
import { gamePlayerActions } from "../slices/gamePlayers-slice";

const playerSocket = (dispatch) => {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("PONG", (data) => {
    console.log("receiving a ping at", data);
  });
  socket.on('ADDING_COMPLETED', (data) =>{
      console.log('added new player:',JSON.parse(data))
      dispatch(gamePlayerActions.addPlayersToGame(data))

  });
  socket.on('PLAYERS_RESET', () => {
    dispatch(gamePlayerActions.resetPlayers())
    console.log('All players reset')
  });
  return socket;
};

export default playerSocket;
