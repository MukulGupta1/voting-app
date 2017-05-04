'use strict';

var path = process.cwd();
var PollCountHandler = require(path + '/app/controllers/pollCountHandler.server.js');
var PollHandler = require(path + '/app/controllers/pollHandler.server.js');


module.exports = function(app, passport) {

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		else {
			res.redirect('/login');
		}
	}

	var loggedIn;
	var pollCountHandler = new PollCountHandler();
	var pollHandler = new PollHandler();

	app.route('/')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/index', {loggedIn: true});
		});

	app.route('/login')
		.get(function(req, res) {
			res.render(path + '/public/login', {loggedIn: false});
		});

	app.route('/logout')
		.get(function(req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/profile', {loggedIn: true});
		});

	app.route('/api/:id')
		.get(isLoggedIn, function(req, res) {
			res.json(req.user);
		});

	app.route('/api/:id/pollCount')
		.get(isLoggedIn, pollCountHandler.getPollCount);

	app.route('/api/:id/polls')
		.get(isLoggedIn, pollHandler.getPolls)
		.post(isLoggedIn, pollHandler.addPoll)

	app.route('/viewPolls')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/pollList', {loggedIn: true})
		})

	app.route('/auth/facebook')
		.get(passport.authenticate('facebook', {
			scope: 'email'
		}));

	app.route('/auth/facebook/callback')
		.get(passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	app.route('/addPoll')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/addPoll', {loggedIn: true});
		})
		.post(isLoggedIn, pollHandler.addPoll)

	app.route('/polls/:id')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/poll', {loggedIn: true});
		})
		.post(isLoggedIn, pollHandler.updatePoll)

	app.route('/pollResults/:id')
		.get(isLoggedIn, function(req, res) {
			res.render(path + '/public/pollResult', {loggedIn: true});
		})

	app.route('/api/polls/:id')
		.get(isLoggedIn, pollHandler.getPoll)

};
