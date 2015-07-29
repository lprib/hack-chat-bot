help = {};

help.eval = function(data, chatConnection, commands, config) {
	if(data.arguments.length == 0) {
        commandList = "";
        for(var key in commands) {
            if(!commands[key].hidden) { //if command is not hidden
		      commandList += config.trigger + key + ", ";
            }
        }
	   chatConnection.sendMessage("$\\large\\color{#0066FF}{Miscellaneous\\ Tasks\\ Bot}$ By @Jax\n(Use help <command name> to get info on a specific command)\nAll commands start with " + config.trigger + "\n\n" + commandList);
        return;
	}
	if(commands[data.arguments[0]] != null) {
	   chatConnection.sendMessage(commands[data.arguments[0]].help);
	} else {
		chatConnection.sendMessage("unknown command: " + data.arguments[0]);
	}
}
help.help = "Usage: help <command>\nDisplays information and usage about a command.";

module.exports = {help: help, h: help};