crypto = require("crypto");

var hash = {};
hash.eval = function(data, chatConnection) {
	var hashInput = data.argText.substring(data.arguments[0].length + 1, data.argText.length);
	hashText = crypto.createHash(data.arguments[0]).update(hashInput).digest("hex");
	chatConnection.sendMessage(data.arguments[0] + " hash: " + hashText);
}
hash.help = "Usage: hash <algorithm> <text>\nPerforms a hash algorithm on <text>. Examples of algorithms are md5, sha1, sha256\n" + 
"A list of available hashes can be found here:\nhttps://raw.githubusercontent.com/JaxForReal/hack-chat-bot/master/source/commands/hashes.txt";

var encoding = "base64";

var encrypt = {};
encrypt.eval = function(data, chatConnection) {
	text = data.argText.substring(data.arguments[0].length + data.arguments[1].length + 2, data.argText.length);
	cipher = crypto.createCipher(data.arguments[0], data.arguments[1]);
	result = cipher.update(text, "utf-8", encoding);
	result += cipher.final(encoding);
	chatConnection.sendMessage(data.arguments[0] + " encrypted text: " + result);
}
encrypt.help = "Usage: encrypt <algorithm> <password> <text>\n returns <text>, encrypted with specified algorithm and password\n" + 
"A list of algorithms can be found here:\nhttps://raw.githubusercontent.com/JaxForReal/hack-chat-bot/master/source/commands/ciphers.txt";

var decrypt = {};
decrypt.eval = function(data, chatConnection) {
	text = data.argText.substring(data.arguments[0].length + data.arguments[1].length + 2, data.argText.length);
	cipher = crypto.createDecipher(data.arguments[0], data.arguments[1]);
	result = cipher.update(text, encoding, "utf-8");
	result += cipher.final("utf-8");
	chatConnection.sendMessage(data.arguments[0] + " decrypted text: " + result);
}
decrypt.help = "Usage: decrypt <algorithm> <password> <encrypted text>\nDecrypts <algorithm>-encrypted text with <password>"

module.exports = {hash: hash, encrypt: encrypt, decrypt: decrypt};