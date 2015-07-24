var textCommand = function(text) {
    this.text = text;
    
    this.eval = function(data, chatConnection) {
    text.replace(%nick%, data.nick);
    chatConnection.sendMessage(this.text);
    }
    this.help = "Takes no arguments.";

}


var hello = new textCommand("Hi there %nick%");
hello.prototype = textCommand;

module.exports = {hello: hello};