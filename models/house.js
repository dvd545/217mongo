var mongoose = require('mongoose');

var stateschema = new mongoose.Schema({
    country: String,
    state: String
});
mongoose.model( 'statedata', stateschema );


