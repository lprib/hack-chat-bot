var exec = {};

exec.eval = function(data, chatConnection, commands, config) {
	console.log(eval(data.argText));
}
exec.hidden = true;

module.exports = {exec: exec, eval: exec};