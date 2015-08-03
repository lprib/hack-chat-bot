var textCommand = function(text) {
    this.text = text;
    
    this.eval = function(data, chatConnection) {
    parsedText = this.text.replace("%nick%", data.nick);
    parsedText = this.text.replace("%arg0%", data.arguments[0]);

    chatConnection.sendMessage(parsedText);
    }
    this.help = "Takes no arguments.";

}

exp = {};

exp.hello = new textCommand("Hi there %nick%");
exp.hello.prototype = textCommand;

exp.android = new textCommand("        XXXXXXXX\n      XXXXXXXXXXXX\n     XXX  XXXX  XXX\n    XXXXXXXXXXXXXXXX\n    XXXXXXXXXXXXXXXX\n\n    XXXXXXXXXXXXXXXX\n XX XXXXXXXXXXXXXXXX XX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\nXXX XXXXXXXXXXXXXXXX XXX\n XX XXXXXXXXXXXXXXXX XX\n    XXXXXXXXXXXXXXXX\n    XXXXXXXXXXXXXXXX\n      XXX      XXX\n      XXX      XXX\n      XXX      XXX\n       X        X\n\n\"You iOS shills can suck my dick\"\n-Matías Duarte, Android designer");
exp.android.prototype = textCommand;

exp.cat = new textCommand("hack.cat:\nhttps://twitter.com/Corwinasa/status/624507505637396480\ncredit to @MinusGix");
exp.cat.prototype = textCommand;

module.exports = exp;