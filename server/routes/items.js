var router = require('express').Router();

var DBItems = require('../models/userModel');


router.get('/', function(req, res){
    console.log('in items get route');
    DBItems.find({}, function (err, results) {
        if (err) {
            console.log('DBItems not found', err);
            res.sendStatus(500);
        }else{
            console.log('results:', results[0].shelfItems);
            res.send(results);
            // res.send(results.data);
        }
    });
});

module.exports = router;