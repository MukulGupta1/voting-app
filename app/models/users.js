'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  fb: {
  	id: String,
  	access_token: String,
  	name: String,
    email: String
  },
  nbrPolls: {
    polls: Number
  },
  nbrClicks: {
    clicks: Number
  }
}, { versionKey: false });

module.exports = mongoose.model('User', User);
