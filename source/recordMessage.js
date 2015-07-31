function recordMessage(data, config) {
	if(config.log[data.nick] === undefined)
		config.log[data.nick] = [];
	config.log[data.nick].push(data.text);
}

module.exports = recordMessage;