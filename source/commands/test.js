var test = {};

test.eval = function(data, chatConnection) {
	out = ""
	out += "argText: " + data.argText;
	out += "\narguments[0]: " + data.arguments[0];
	out += "\narguments[1]: " + data.arguments[1];
	chatConnection.sendMessage(out)
}
test.hidden = true;

module.exports = {test: test};