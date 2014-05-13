
/*
 * GET home page.
 */

var mongoose = require('mongoose')
//  , house = mongoose.model('house');

exports.index = function(req, res) {
    res.render('index', {title: 'Homepage'});
};

exports.houses = function(req, res){
    res.render('houses', {title: 'housemap'});

};

 var statedata = require('../models/state');

exports.index = function(req, res) {
    var stateid = "CA";
    statedata.statelist(stateid, function (err, statelist) {
        res.render('index', {
            title: 'Test web page on node.js using Express and Mongoose',
            pagetitle: 'Hello there',
            state: state.stateid
        });
    });
};

exports.index = function(req, res) {
  var course = new Course();
      course.cid = 'IS 117';
      course.title = 'Introduction to Building Websites';
      course.save(function (err) {
        console.log(err);
      });
  
  Course.find({}, function(err, courses) {
    res.render('index', { 
      title: 'Personal Learning Platform', 
      courses: courses 
    });
 });
}
