//Hack.chat bot by Jax
//TODO commenting (everything)
//TODO split main.js into multiple files

var FileSystem = require("fs");
var Path = require("path");
var ReadLine = require("readline");
var ChatConnection = require("./chatConnection.js");
var config = require("./config.json");

commands = {};

var chatConnection = new ChatConnection(config.url, config.nickname, config.channel);

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


var parseMessage = function(data, acceptHiddenCommands) {
	if(data.text.indexOf(config.trigger) != 0) {
		return;
	}
    if(config.banned.indexOf(data.nick) > -1)
        return;
	data.arguments = data.text.split(" ");
	command = data.arguments[0].substring(config.trigger.length, data.arguments[0].length);
	data.arguments.splice(0, 1);
	data.argText = data.arguments.join(" ");
	
	for(var key in commands) {
		if(key == command) {
            if((!acceptHiddenCommands) && (commands[key].hidden))
                return;
			console.log(key + " detected");
			commands[key].eval(data, chatConnection, commands, config);
			break;
		}
	}
}

consoleInterface.on("line", function(line){
	console.log("console line recieved");
    parseMessage({text: line, nick: "ConsoleInput"}, true);
});

chatConnection.on("chat", function(data) {
	parseMessage(data, false);
});