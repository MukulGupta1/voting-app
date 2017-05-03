'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollCounter = new Schema({
  _id: String,
  seq: Number
  }, { versionKey: false })

module.exports = mongoose.model('PollCounter', PollCounter);