'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var PollCountHandler = require(path + '/app/controllers/pollCountHandler.server.js');
var PollHandler = require(path + '/app/controllers/pollHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var clickHandler = new ClickHandler();
	var pollCountHandler = new PollCountHandler();
	var pollHandler = new PollHandler();

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user);
		});
		
	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);
		
	app.route('/api/:id/pollCount')
		.get(isLoggedIn, pollCountHandler.getPollCount);
		
	app.route('/api/:id/polls')
		.get(isLoggedIn, pollHandler.getPolls)
		.post(isLoggedIn, pollHandler.addPoll)
		
		
	app.route('/viewPolls')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/poll.html')
		})
		

	app.route('/auth/facebook')
		.get(passport.authenticate('facebook', { scope : 'email' 
		}));

	app.route('/auth/facebook/callback')
		.get(passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));
			
	app.route('/addPoll')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/addPoll.html');
	});
	
	app.route('/polls/:id')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/addPoll.html');
	});
	
};
