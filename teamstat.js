const team = {
  _players  : [], 
  _games : [],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayers(newFirstName,newLastName,newAge){
    player.firstName.push(newFirstName);
    player.lastName.push(newLastName); 
    player.age.push(newAge);
    this._players.push(newFirstName + " " + newLastName);

  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    game.opponent.push(newOpponent);
    game.teamPoints.push(newTeamPoints);
    game.opponentPoints.push(newOpponentPoints);
    this._games.push(newOpponent);
  }
  // this works fine because we don't use keyword in properties of object and the value of key is given after colon and square bracket represent it's an array.
};
const player = {
  firstName :[],
  lastName : [],
  age : [],
};
const game = {
  opponent : [],
  teamPoints : [],
  opponentPoints : [],
};
game.opponent.push("Mixed 1st year");
game.opponent.push("Aoba Johsai");
game.opponent.push("Local Club");
game.teamPoints.push(25);
game.teamPoints.push(25);
game.teamPoints.push(22);
game.opponentPoints.push(20);
game.opponentPoints.push(23);
game.opponentPoints.push(25);
team._games.push(game.opponent[0]);
team._games.push(game.opponent[1]);
team._games.push(game.opponent[2]);

//console.log(game);
player.firstName.push("Hinata");
player.firstName .push("Kageyama");
player.firstName.push("Tanaka");
player.lastName.push("Shoyo");
player.lastName.push("Tobio");
player.lastName.push("Senpai");
player.age.push(21);
player.age.push(34);
player.age.push(23);
//console.log(player);
team._players.push(player.firstName[0]+" "+player.lastName[0]);
team._players.push(player.firstName[1]+" "+player.lastName[1]);
team._players.push(player.firstName[2]+" " +player.lastName[2]);
team.addPlayers("Tsukki","Tsukkishima",18);
team.addGame("Shiratozawa", 21 , 25);

console.log(team);
console.log(team.players);
console.log(team.games);
