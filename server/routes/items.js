var router = require('express').Router();

var DBItems = require('../models/userModel');


router.get('/', function(req, res){
    console.log('in items get route');
    DBItems.find({}, function (err, results) {
        if (err) {
            console.log('DBItems not found', err);
            res.sendStatus(500);
        }else{
            res.send(results);
        }
    });
});

module.exports = router;