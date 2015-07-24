printCommands = {};

printCommands.eval = function(data, chatConnection, commands, config) {
	commandList = "";
	for(var key in commands) {
        if(!commands[key].hidden) {
		  commandList += config.trigger + key + ", ";
        }
	}
	chatConnection.sendMessage("$\\large\\color{yellow}{Bot\\ by\\ Jax}$\nAll commands start with " + config.trigger + "\n" + commandList);
	printCommands.help = "All commands start with " + config.trigger + "\nUsage: commands\nLists bot creator and available commands."
}

module.exports = {commands: printCommands};