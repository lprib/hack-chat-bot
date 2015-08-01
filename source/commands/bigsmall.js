var sanitize = require("../latexSanitize.js");

bigsmall = {};

bigsmall.eval = function(data, chatConnection) {
	var isSanitized = sanitize(data.argText);
	if(isSanitized[0]) {
		chatConnection.sendMessage("String contains forbidden character: " + isSanitized[1]);
		return;
	}
	
	var output = "$";
 
    for (i = 0; i < data.argText.length; i++) {
        if (data.argText.charAt(i) == ' ') { //if chatacter is a space, insert katex space in output
            output += "\\ \\ ";
        } else {
            if (i % 2 == 0) { //if divisible by 2 (every other one)
                output += "\\huge " + data.argText.charAt(i) + " ";
            } else {
                output += "\\small " + data.argText.charAt(i) + " ";
            }
        }
    }
    output += "$";
	chatConnection.sendMessage(output);
}
bigsmall.help = "Usage: bigsmall <text>\n<text> is displayed as a series of large and small characters.";

module.exports = {bigsmall: bigsmall};