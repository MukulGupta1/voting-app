'use strict';
var Polls = require('../models/polls.js')

function PollHandler() {

	this.addPoll = function (req, res) {
		var newPoll = new Polls();
		
		newPoll.user_id = req.user.fb.id,
		newPoll.title = req.body.pollTitle,
		newPoll.question = req.body.question,
		newPoll.option_one = req.body.optionOne,
		newPoll.option_two = req.body.optionTwo,
		newPoll.option_three = req.body.optionThree,
		newPoll.option_one_val = 0,
		newPoll.option_two_val = 0,
		newPoll.option_three_val = 0
		
		newPoll.save(function (err) {
			if (err) throw err;
			res.end()
		});

	}
		
}

module.exports = PollHandler;
