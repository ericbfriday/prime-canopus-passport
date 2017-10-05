var router = require('express').Router();

router.get('/', function(req, res){
    console.log('in items get route');
    res.sendStatus(200);
});

module.exports = router;