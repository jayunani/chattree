'use strict';

const Message = require('./messageModel');

module.exports = {
	getMessages: function(request, response) {
			
	},
	postMessages: function(request, response) {
		Message.sync().then(function(){
			return Message.create(request.body);
		});
	}
}