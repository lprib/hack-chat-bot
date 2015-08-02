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

var android = new textCommand("        XXXXXXXX\n      XXXXXXXXXXXX\n     XXX  XXXX  XXX\n    XXXXXXXXXXXXXXXX\n    XXXXXXXXXXXXXXXX\n\n    XXXXXXXXXXXXXXXX\n XX XXXXXXXXXXXXXXXX XX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\n XX XXXXXXXXXXXXXXXX XX\n    XXXXXXXXXXXXXXXX\n    XXXXXXXXXXXXXXXX\n      XXX      XXX\n      XXX      XXX\n      XXX      XXX\n       X        X\n\n\"You iOS shills can suck my dick\"\n-Matías Duarte, Android designer");
android.prototype = textCommand;

var cat = new textCommand("hack.cat:\nhttps://twitter.com/Corwinasa/status/624507505637396480\ncredit to @MinusGix");
cat.prototype = textCommand

module.exports = {hello: hello, /*android: android, ios: android,*/ cat: cat};