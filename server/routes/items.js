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

// test code below -- not functioning
router.put('/', function (req, res) {
    var itemUrl = req.body.url;
    var desc = req.body.description;
    var loggedUser = req.user.username;
    console.log(req.body.url, req.body.description, req.user.username);
    // if session is valid return true and username
    if (req.isAuthenticated()) {
        // put in logic for put request!!
        DBItems.updateOne({ username: loggedUser }, { $push: { shelfItems: { description: desc, url: itemUrl } } }, { upsert: true }, function(err, response){
            if (err) {
                console.log('Put error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(202);
            }
        });
    } else {
        res.sendStatus(401);
        // res.status(401).send({ isAuth: false });
    }

});
// end test code

module.exports = router;