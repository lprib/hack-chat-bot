crypto = require("crypto");

var hash = {};
hash.eval = function(data, chatConnection) {
	var hashInput = data.argText.substring(data.arguments[0].length + 1, data.argText.length);
	hashText = crypto.createHash(data.arguments[0]).update(hashInput).digest("hex");
	chatConnection.sendMessage(data.arguments[0] + " hash: " + hashText);
}
hash.help = "Usage: hash <algorithm> <text>\nPerforms a hash algorithm on <text>. Examples of algorithms are md5, sha1, sha256";

var algorithm = "aes-256-ctr";
var encoding = "base64";

var encrypt = {};
encrypt.eval = function(data, chatConnection) {
	text = data.argText.substring(data.arguments[0].length + 1, data.argText.length);
	cipher = crypto.createCipher(algorithm, data.arguments[0]);
	result = cipher.update(text, "utf-8", encoding);
	result += cipher.final(encoding);
	chatConnection.sendMessage(algorithm + " encrypted text: " + result);
}
encrypt.help = "Usage: encrypt <password> <text>\n returns encrypted text";

var decrypt = {};
decrypt.eval = function(data, chatConnection) {
	text = data.argText.substring(data.arguments[0].length + 1, data.argText.length);
	cipher = crypto.createDecipher(algorithm, data.arguments[0]);
	result = cipher.update(text, encoding, "utf-8");
	result += cipher.final("utf-8");
	chatConnection.sendMessage(algorithm + " decrypted text: " + result);
}
decrypt.help = "Usage: decrypt <password> <encrypted text>"

//cryptoConfig algorithm encoding
//algorithms can be found in ciphers.txt
var cryptoConfig = {};
cryptoConfig.eval = function(data, chatConnection) {
	algorithm = data.arguments[0];
	encoding = data.arguments[1];
	chatConnection.sendMessage("Now using algorithm: " + algorithm + ", encoding: " + encoding + " for encrypt and decrypt.");
}
cryptoConfig.hidden = true;

module.exports = {hash: hash, encrypt: encrypt, decrypt: decrypt, cryptoConfig: cryptoConfig};