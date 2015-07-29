base64encode = {}

base64encode.eval = function(data, chatConnection) {
	chatConnection.sendMessage("Encoded text: " + new Buffer(data.argText, "utf-8").toString("base64"));
}
base64encode.help = "Usage: base64encode <text>\nConverts <text> (as a utf-8 string) to base64";

base64decode = {}

base64decode.eval = function(data, chatConnection) {
	chatConnection.sendMessage("Decoded text: " + new Buffer(data.argText, "base64").toString("utf-8"));
}
base64decode.help = "Usage: base64decode <text>\nConverts <text> (as a base64 string) to utf-8";

module.exports = {base64encode: base64encode, base64decode: base64decode};