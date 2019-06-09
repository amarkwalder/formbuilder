'use strict';

var mongoose = require('mongoose');

const FormDataSchema = mongoose.Schema({
  timestamp: Date,
  form: String,
  title: String,
  data: String,
  metadata: String
});

module.exports = mongoose.model('FormData', FormDataSchema);