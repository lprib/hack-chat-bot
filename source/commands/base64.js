base64 = {}

base64.eval = function(data, chatConnection) {
	text = data.argText.substring(data.arguments[0].length + 1, data.argText.length);
	if(data.arguments[0].toLowerCase() == "encode") {
		chatConnection.sendMessage("Encoded text: " + new Buffer(text, "utf-8").toString("base64"));
	}else if(data.arguments[0].toLowerCase() == "decode"){
		chatConnection.sendMessage("Decoded text: " + new Buffer(text, "base64").toString("utf-8"));
	} else {
		chatConnection.sendMessage(base64.help);
	}
}
base64.help = "Usage: base64 <encode | decode> <text>";

module.exports = {base64: base64};