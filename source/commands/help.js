help = {};

help.eval = function(data, chatConnection, commands, config) {
	if(data.arguments.length == 0) {
		chatConnection.sendMessage("Usage: help <command>");
		return;
	}
	console.log(data.arguments[0]);
	if(commands[data.arguments[0]] != null) {
	chatConnection.sendMessage(commands[data.arguments[0]].help);
	} else {
		chatConnection.sendMessage("unknown command: " + data.arguments[0]);
	}
}
help.help = "Usage: help <command>\nDisplays information and usage about a command."

module.exports = {help: help, h: help};