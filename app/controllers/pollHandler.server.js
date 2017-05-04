'use strict';
var Polls = require('../models/polls.js')

function PollHandler() {

	this.addPoll = function(req, res) {
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

		newPoll.save(function(err) {
			if (err) throw err;
			res.redirect('/');
		});
	}

	this.getPolls = function(req, res) {
		Polls
			.find({
				'user_id': req.user.fb.id
			})
			.exec(function(err, result) {
				if (err) {
					throw err;
				}
				res.json(result);
			});
	};

	this.getPoll = function(req, res) {
		var objId = require('mongoose').Types.ObjectId(req.params.id);
		Polls
			.findById(objId)
			.exec(function(err, result) {
				if (err) {
					throw err;
				}
				res.json(result);
			});
	};

	this.updatePoll = function(req, res) {
		var objId = require('mongoose').Types.ObjectId(req.params.id);
		console.log('objId: ' + objId);
		var optionVal = req.body.question_one;
		Polls
			.findByIdAndUpdate(objId, { $inc : { [optionVal]: 1 }}, (function(err, result){
				if(err) {
					throw err;
				}
				res.redirect('/pollResults/' + objId);
			}));
		}

}

module.exports = PollHandler;
