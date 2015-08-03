alias = {};

alias.eval = function(data, chatConnection, commands) {
	if(commands[data.arguments[0]] != undefined) {
		chatConnection.sendMessage("Command already exists.");
		return;
	}
	command = data.arguments[1];
	console.log(command)
	/*if(commands.indexOf(command) > -1) {
		chatConnection.sendMessage(command + " is not a valid command\nMake sure you use only the command name, not the prefix.");
		return;
	}*/
	args = data.argText.substring(command.length + data.arguments[0].length + 2, data.argText.length);
	var newCommand = new aliasCommand(command, args);
	newCommand.prototype = aliasCommand;
	commands[data.arguments[0]] = newCommand;
}
alias.help = "Usage: alias <new command name> <command> <args>";

module.exports = {alias: alias};

function aliasCommand(command, text){
	this.command = command;
	this.text = text;
	this.eval = function(data, chatConnection, commands, config){
		data.arguments = text.split(" ");
		data.argText = text;
		commands[command].eval(data, chatConnection, commands, config);
	}
	this.help = "This is a command made with \"alias\"";
}
