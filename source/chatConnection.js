var WebSocket = require("ws");
var Events = require("events");
var Util = require("util");

function ChatConnection(url, nickname, channel){
	
	this.url = url;
	this.nickname = nickname;
	this.channel = channel;
	Events.EventEmitter.call(this);
	
	var chatConnection = this;
	
	this.webSocket = new WebSocket(url);
	
	this.sendMessage = function(text) {
		var messageData = JSON.stringify({cmd: "chat", text: text});
		chatConnection.webSocket.send(messageData);
	};
	
	this.webSocket.on("open", function() {
		var joinData = JSON.stringify({cmd: "join", nick: nickname, channel: channel});
		chatConnection.webSocket.send(joinData);
	});
	
	this.webSocket.on("message", function(data, flags) {
		var dataObject = JSON.parse(data);
		chatConnection.emit(dataObject.cmd, dataObject);
	});
	
	var pingIntervalId = setInterval(function()
	{
		var pingPackage = JSON.stringify({cmd: "ping"});
		chatConnection.webSocket.send(pingPackage);
	}, 240000);
	
	this.webSocket.on("close", function(){
		clearInterval(pingIntervalId);
	});
}

Util.inherits(ChatConnection, Events.EventEmitter);

module.exports = ChatConnection;