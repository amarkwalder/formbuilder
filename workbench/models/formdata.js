'use strict';

var mongoose = require('mongoose');

const FormDataSchema = mongoose.Schema({
    form: String,
    title: String, 
    created: Date,
    modified: Date,
    data: String,
    metadata: String
  });

module.exports = mongoose.model('FormData', FormDataSchema);