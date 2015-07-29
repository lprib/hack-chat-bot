base64 = {}

base64.eval = function(data, chatConnection) {
	chatConnection.sendMessage(new Buffer(data.argText).toString("base64"));
}
base64.help = "Usage: base64 <text>\nConverts <text> (as a string) to base64";

module.exports = {base64: base64};