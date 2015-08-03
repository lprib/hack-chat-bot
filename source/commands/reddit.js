var request = require("request");

var POST_COUNT = 3;

var reddit = {};//multiple data, cunfusing...fix
reddit.eval = function(data, chatConnection) {
	if(data.arguments.length < 1)
		return;
	subreddit = data.arguments[0];
	request("http://reddit.com/r/" + subreddit + "/.json", function(error, result, data){
		var message = "Hottest posts from " + subreddit + ":\n";
		var posts = JSON.parse(data).data.children;

		for(i = 0; i < POST_COUNT; i++) {
			post = posts[i].data;
			message += post.title + "\n" + post.url + "\n\n";
		}
		chatConnection.sendMessage(message);
	});


}

module.exports = {reddit: reddit};