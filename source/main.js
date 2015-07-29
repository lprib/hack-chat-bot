//Hack.chat bot by Jax
//TODO ok, this file is getting way to big...I need to break it up somehow

var FileSystem = require("fs");
var Path = require("path");
var ReadLine = require("readline");
var ChatConnection = require("./chatConnection.js");
var config = require("./config.json");

commands = {};

//websocket connection to hack.chat
var chatConnection = new ChatConnection(config.url, config.nickname, config.channel);

//used for admin conole input
var consoleInterface = ReadLine.createInterface(process.stdin, process.stdout);

//read all of the files in the /commands/ directory
FileSystem.readdir("./commands", function(error, files) {
	if(error) {
		throw error;
	}
    
	//loop through command files
	for(i = 0; i < files.length; i++) {
		if(Path.extname(files[i]) == ".js") { //if it is a js file
			var command = require("./commands/" + files[i]);
			if(typeof command != "object") {
				throw "invalid command: " + files[i];
			}
			
			//if it has multiple functions, load each into commands list
			for(var subCommandKey in command) {
				if(typeof command[subCommandKey] == "object") {
					commands[subCommandKey] = command[subCommandKey];
				}
			}
		}
		
	}
	delete commands.eval; //remove weird command that causes problems...
});

//called whenever a message is sent through the chat
var parseMessage = function(data, acceptHiddenCommands) {
    //if message doesnt begin with the trigger
	if(data.text.indexOf(config.trigger) != 0) {
		return;
	}
    //if message sender is banned
    if(config.banned.indexOf(data.nick) > -1)
        return;
	data.arguments = data.text.split(" ");
	command = data.arguments[0].substring(config.trigger.length, data.arguments[0].length);
	data.arguments.splice(0, 1); //remove command from argument
	data.argText = data.arguments.join(" "); //full message text without command
	
    //loop through all command names(keys)
	for(var key in commands) {
		if(key == command) {
            if((!acceptHiddenCommands) && (commands[key].hidden))
                return;
			console.log(data.nick + ": " + key);
			try{
			commands[key].eval(data, chatConnection, commands, config);
			} catch(exception) {
				chatConnection.sendMessage("Exception: " + exception.message);
				console.log(exception.stack);
			}
			break;
		}
	}
}

//when command is typed in console
consoleInterface.on("line", function(line){
	console.log("console line recieved");
    parseMessage({text: line, nick: "ConsoleInput"}, true);
});

chatConnection.on("chat", function(data) {
	//if user is authed, allow admin commands
	if(config.authedTrips.indexOf(data.trip) > -1){
		parseMessage(data, true);
	} else {
		parseMessage(data, false);
	}
});