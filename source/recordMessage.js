function recordMessage(data, config) {
	if(config.users[data.nick] === undefined)
		config.users[data.nick] = [];
	config.users[data.nick].push(data.text);
}

module.exports = recordMessage;