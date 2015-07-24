ban = {}
ban.eval = function(data, chatConnection, commands, config) {
    config.banned.push(data.arguments[0]);
    chatConnection.sendMessage("Username " + data.arguments[0] + " has been banned from using this bot.");
    console.log("banned: " + config.banned.join());
}
ban.hidden = true;

unban = {}
unban.eval = function(data, chatConnection, commands, config) {
    config.banned.splice(config.banned.indexOf(data.arguments[0]), 1)
    chatConnection.sendMessage("Username " + data.arguments[0] + " has been unbanned from using this bot.");
}
unban.hidden = true;

module.exports = {ban: ban, unban: unban};