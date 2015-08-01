var sanitize = require("../latexSanitize.js");

grey = {};
grey.colors = ["#050000", "#151010", "#252020", "#353030", "#454040",
"#555050", "#656060", "#757070", "#858080", "#959090", "#a5a0a0",
"#b5b0b0", "#c5c0c0", "#d5d0d0", "#e5e0e0", "#f5f0f0"];

grey.eval = function(data, chatConnection) {
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
grey.help = "Usage: grey <text>\n<text> is displayed as a greyscale gradient.";

module.exports = {grey: grey};