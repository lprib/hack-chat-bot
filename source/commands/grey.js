grey = {};
grey.colors = ["#000000", "#101010", "#202020", "#303030", "#404040",
"#505050", "#606060", "#707070", "#808080", "#909090", "#a0a0a0",
"#b0b0b0", "#c0c0c0", "#d0d0d0", "#e0e0e0", "#f0f0f0"];

grey.eval = function(data, chatConnection) {
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