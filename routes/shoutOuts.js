/**
 * Created by kimhayden on 8/30/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET images listing */

router.get('/:id?', function(req, res, next){
    var arrayIndex = req.params.id;

    var file = path.join(__dirname, '../models/shoutOuts.json');

    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var shoutOut = obj;

            obj.forEach(function(item, index){
                if(index == arrayIndex){
                    shoutOut = item;
                }
            });

            res.json(shoutOut);
        }
    })
});

module.exports = router;