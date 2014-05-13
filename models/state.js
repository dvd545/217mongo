  var mongoose = require('mongoose');

exports.statelist = function statelist(state, callback){
    var statedata = mongoose.model('statedata');
    statedata.find({'state':state}, function (err, state){
        if(err) {
            console.log(err);
        }else {
            console.log(state);
            callback("", state);
        }

    })
};