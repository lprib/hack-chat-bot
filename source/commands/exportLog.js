var FileSystem = require("fs");

exportLog = {};

exportLog.eval = function(data, chatConnection, commands, config) {
	FileSystem.writeFile(data.arguments[0], JSON.stringify(config.log), function(err) {
		if(err) {
			throw(err);
		}
	});
}
exportLog.hidden = true;

module.exports = {exportLog: exportLog};