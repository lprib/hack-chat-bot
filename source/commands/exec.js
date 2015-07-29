var exec = {};

exec.eval = function(data, chatConnection, commands, config) {
	console.log(eval(data.argText));
	chatConnection.sendMessage("Executed.");
}
exec.hidden = true;

module.exports = {exec: exec, eval: exec};