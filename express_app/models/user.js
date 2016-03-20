var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userdb');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  projects: [projectSchema]
});

var projectSchema = new Schema({
  name: String,
  bpm: Number,
  signature: String,
  instruments: [instrumentSchema]
});

var instrumentSchema = new Schema({
  type: String,
  pattern: [Number],
  octave: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;