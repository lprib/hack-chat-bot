var sanitize = require("../latexSanitize.js");

rainbow = {};
rainbow.colors = ["red", "orange", "yellow", "green", "blue", "purple"];
rainbow.eval = function(data, chatConnection) {
	var isSanitized = sanitize(data.argText);
	if(isSanitized[0]) {
		chatConnection.sendMessage("String contains forbidden character: " + isSanitized[1]);
		return;
	}
	
	var output = "$";
    var colorIndex = 0;
 
    for (i = 0; i < data.argText.length; i++) {
        if (colorIndex >= this.colors.length) {
            colorIndex = 0;
        }
        if (data.argText.charAt(i) == ' ') {
            output += "\\ ";
        } else {
            output += "\\color{" + this.colors[colorIndex] + "}{" + data.argText.charAt(i) + "}";
            colorIndex++;
        }
    }
    output += "$";
    chatConnection.sendMessage(output);
}
rainbow.help = "Usage: rainbow <text>\n<text> is displayed as a rainbow.";

module.exports = {rainbow: rainbow};