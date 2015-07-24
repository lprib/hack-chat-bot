var textCommand = function(text) {
    this.text = text;
    
    this.eval = function(data, chatConnection) {
    parsedText = this.text.replace("%nick%", data.nick);
    chatConnection.sendMessage(parsedText);
    }
    this.help = "Takes no arguments.";

}


var hello = new textCommand("Hi there %nick%");
hello.prototype = textCommand;

module.exports = {hello: hello};