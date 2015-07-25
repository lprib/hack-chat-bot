Cipher = require("simple-cipher");

encrypt = {}
encrypt.eval = function(data, chatConnection) {
	password = data.arguments[0];
	string = data.argText.substring(password.length + 1, data.argText.length);
	crypt = Cipher.encrypt(string, password);
	chatConnection.sendMessage("Password: " + password + "\nText: " + string + "\n" + crypt);
}
encrypt.help = "Usage: encrypt <password> <text>\n<text> is encrypted with <password>. Use decrypt to decrypt <text>"

decrypt = {}
decrypt.eval = function(data, chatConnection) {
	crypt = Cipher.decrypt(data.arguments[1], data.arguments[0]);
	chatConnection.sendMessage("Decrypted message: " + crypt);
}
decrypt.help = "Usage decrypt <password> <encrypted text>\nDecrypts <encrypted text>."

module.exports = {encrypt: encrypt, decrypt: decrypt};