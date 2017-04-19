'use strict';

var Users = require('../models/users.js');

function PollCountHandler () {
	
	this.getPollCount = function (req, res) {
		Users
			.findOne({ 'fb.id': req.user.fb.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }
				res.json(result.nbrPolls);
			});
	};
}

module.exports = PollCountHandler;
