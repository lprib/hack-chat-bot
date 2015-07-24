source = {}

source.eval = function(data, chatConnection) {
	chatConnection.sendMessage("https://github.com/JaxForReal/hack-chat-bot");
}
source.help = "";

module.exports = {source: source};