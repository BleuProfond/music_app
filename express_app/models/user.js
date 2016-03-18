var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userdb');

var Schema = mongoose.Schema;

//Schema:
//USER COLLECTION: 
  //username, email, password: string,
  //projects: array of documents
    //PROJECT DOCUMENT:
    //name: string, instruments: array of documents, other settings...
      //INSTRUMENTS DOCUMENT:
        //type: string, pattern: array, octave: number



var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  projects: {
    name: String,
    instruments: {
        pattern: Array,
        octave: Number
    },
    settings: {
      bpm: Number,
      signature: String
    }
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;