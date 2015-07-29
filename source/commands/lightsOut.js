GAME_SIZE = 5;

lostart = {};
lostart.eval = function(data, chatConnection) {
	game = generateMatrix(GAME_SIZE, GAME_SIZE);
	games[data.nick] = game;
	chatConnection.sendMessage("Lights Out game for " + data.nick + "\nGame board:\n" + displayMatrix(game));
}
lostart.help = "Starts (or restarts) a game of Lights Out for your username\nBoards are randomly generated\nMore info about the game can be found here https://en.wikipedia.org/wiki/Lights_Out_(game)";

loplay = {};
loplay.eval = function(data, chatConnection) {
	var game = games[data.nick];
	if(!game) {
		chatConnection.sendMessage("You have not yet started a Lights Out game.\nUse .lostart to begin a game.");
		return;
	}
	
	if(data.arguments.length < 2)
		return;
	
	var x = get(parseInt(data.arguments[0]));
	var y = get(parseInt(data.arguments[1]));
	
	game = invert(game, get(x), get(y));
	game = invert(game, get(x+1), get(y));
	game = invert(game, get(x), get(y+1));
	game = invert(game, get(x-1), get(y));
	game = invert(game, get(x), get(y-1));
	chatConnection.sendMessage("@" + data.nick + ", your board is:\n" + displayMatrix(game));
}
loplay.help = "Usage: loplay <x> <y>\nMake a play at <x> and <y> according to the rules of Lights Out";

loboard = {};
loboard.eval = function(data, chatConnection) {
	chatConnection.sendMessage("@" + data.nick + ", your board is:\n" + displayMatrix(game));
}
loboard.help = "Displays your Lights Out board";

var games = {};

function generateMatrix(width, height) {
	array = [];
	for(i = 0; i < height; i++) {
		array[i] = [];
		for(j = 0; j < width; j++) {
			array[i][j] = Math.random() > 0.5;
			//array[i][j] = false;
		}
	}
	return array;
}

function displayMatrix(game) {
	string = "";
	for(i = 0; i < game.length; i++) {
		for(j = 0; j < game[0].length; j++) {
			string +=  +game[i][j];
		}
		string += "\n";
	}
	return string;
}

//returns number that auto overlaps on board
function get(num) {
	if(num === undefined)
		return 0;
	if(num >= GAME_SIZE)
		num = GAME_SIZE - 1;
	if(num < 0)
		num = 0;
	return num
}

function invert(game, x, y) {
	game[y][x] = !game[y][x];
	return game;
}

module.exports = {lostart: lostart, loplay: loplay, loboard: loboard};