var Rant = require("rantjs");

sentence = {};

sentence.eval = function(data, chatConnection) {
	chatConnection.sendMessage(Rant(data.argText));
}
sentence.help = "Usage: sentence <text>\nUses the rant library (http://berkin.me/rant/ )on <text>"

module.exports = {sentence: sentence};