md5 = require("md5");

hash = {};
hash.eval = function(data, chatConnection){
	chatConnection.sendMessage(md5(data.argText));
}
hash.help = "Usage: hash <text>\nReturns the MD5 hash of <text>";

module.exports = {hash: hash};