# Bounty Hunters (c1936922)

<div class="boxBorder">

### Bounty Hunters is a web application written primarily using React and Nodejs, allowing multiple users to play a card game together within
### the same shared space.

## Assumptions

This application was created with the assumption of users accessing the game using a web application. Additionally, the application has been programmed against currently the most popular web browser foundation, Chromium (Google Chrome & Microsoft Edge). Incompatibility issues may occur when testing against Safari and Mozilla fixes, which may require further development in order to run correctly.

Progam tests occurred within the Google Chrome browser (Chromium).


## Code Setup - complete via Command Prompt/Git Bash

### 1. Initial clone 
```bash
# Clone repository
git clone https://git.cardiff.ac.uk/c1936922/bounty-hunters.git
```

### 2.  Build local version of application using commands below:
###     

```bash
# 1. Navigate into directory folder
cd bounty-hunters

# 2. Install modules within parent folder
npm install

# 3. Complete further client and server installations
npm run packageInstall

# 4 launch Application and Server: 
npm run start

```

### 3. After following commands have been completed, navigate to application:

### localhost:3000


## Requirements 

| Requirement |  Location | Details |
| ---------| -------- | -------- |
| Lobby | CLIENT  |   Lobby player creation |
|  |  | Multiple players allowed |
|  |  | Game can be launched with 1 or more players |
| Game Interaction| CLIENT | Interactions available |
|  |  | Players can choose a card to play |
|  |  | Players can view other player submissions |
|  |  | Room details presented |
|  |  | Player joinprogress bar presented |
|  |  | Player choices log presented |
|  |  | Game progresses when all players choose a card to play |
|  |  | New room card chosen when progress bar full  |
| |  | Game ends when no room cards left in deck  |
| Game logic | SERVER | Official activity creation |
|  |  | Room card holds details on player targets when player turns end |
|  |  | player loses energy values if hit by room card |
|  |  | Player receives points if card chosen reaches progress bar end first |
|  |  | Player resets points if energy brought to zero |

## Programming tools used


### - React (https://reactjs.org/)
React being implemented as the front end library allowed flexible usage of component design in order to construct the game, without worrying about compatibility issues forming when launching on different devices. Since All react code is converted to Javascript and JSX at runtime via Babel library, all react components created should be compatible with all different browsers.
####  React cont. - JavaScript
Since React acted as the middle library to convert all components into compatible Javascript, fewer issues were transparent, that may have appeared if I were to attempt writing the entire program using Javascript only. React allowed me to bypass writing mostly Javascript by providing a simpler library to use that performed tougher tasks automatically, allowing me to focus on core game functions and application design.



### - Express.js (https://expressjs.com/)
Based upon Node.js library, Express.js is a simplified framework that provides server back-end creation and allows services communication between the client and itself. Express was chosen due to simplifying a lot of API method calls that Node.js implements (reducing boilerplate code clutter), alongside allowing incorporation.

Express also handles the server storage, ensuring all data sent via connection sockets are handled on the back end of application, with logic applied and redistributed out as state updates.

#### - Express.js cont. -  Node.js (https://nodejs.org/en/)
Node is built upon the Express library, which allows the game to have a localised storage for which game state communication can be made between multiple connections.

### - Socket.io (https://socket.io/)
Socket.io is implemented for allowing the communication between multiple connections that use the application at the same time, successfully implementing the multiplayer experience. Each user connecting to server creates a WebSocket object that they use to communicate their actions made via the client, and receive updated states back from the server which are returned through React components into the client application.


