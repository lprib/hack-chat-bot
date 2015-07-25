ban = {}
ban.eval = function(data, chatConnection, commands, config) {
    config.banned.push(data.arguments[0]); //add ban username to banned list
    chatConnection.sendMessage("Username " + data.arguments[0] + " has been banned from using this bot.");
}
ban.hidden = true;

unban = {}
unban.eval = function(data, chatConnection, commands, config) {
    config.banned.splice(config.banned.indexOf(data.arguments[0]), 1) //remove username from list
    chatConnection.sendMessage("Username " + data.arguments[0] + " has been unbanned from using this bot.");
}
unban.hidden = true;

listbanned = {}
listbanned.eval = function(data, chatConnection, commands, config) {
    console.log(config.banned.join(", "));
}
listbanned.hidden = true;

module.exports = {ban: ban, unban: unban, listbanned: listbanned};