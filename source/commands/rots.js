var RotModule = require("rot");

rot = {};
rot.eval = function(data, chatConnection) {
	if(data.arguments.length < 2) {
		chatConnection.sendMessage("invalid arguments\n\n" + rot.help);
		return;
	}
	
	n = data.arguments[0];
	text = data.argText.substring(n.length, data.argText.length);
	
	var output;
	output = RotModule(text, n);
	chatConnection.sendMessage(output)
}

rot.help = "Usage: rot <n> <text>\nPerforms rot<n> on text";

module.exports = {rot: rot};