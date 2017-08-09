'use strict';

var mongoose = require('mongoose');
var db = function(){
    return{
        config: function(conf){
            mongoose.connect('mongodb://localhost/bookstore');
            var db = mongoose.connection;
            db.on('errpr', console.error.bind(console, 'conection error'));
            db.once('open', function(){
                console.log('db connection open');
            });
        }
    };
}

module.exports = db();