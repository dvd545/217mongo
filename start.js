var express = require('express'),
    mongoose = require('mongoose')
    , http = require('http');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 8000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + "/public"));
});

mongoose.connect("mongodb://localhost/test");

var HouseSchema = new mongoose.Schema({
        State: String,
        Income: String
    }),

    Houses = mongoose.model('Houses', HouseSchema);
// INDEX	
app.get("/house", function (req, res) {
    Houses.find({}, function (err, docs) {
        res.render('dhouse/index', { houses: docs });
    });
});
// MAP  
app.get('/dhouse/index', function (req, res) {
    res.render("dhouse/index");
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});


