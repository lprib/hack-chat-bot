say = {};

say.eval = function(data, chatConnection) {
    chatConnection.sendMessage(data.argText);
}

say.help = "repeats <text>";
say.hidden = true;

module.exports = {say: say, s: say};