'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
  user_id: String,
  title: String,
  question: String,
  option_one: String,
  option_two: String,
  option_three: String,
  option_one_val: Number,
  option_two_val: Number,
  option_three_val: Number
}, { versionKey: false })

module.exports = mongoose.model('Poll', Poll);