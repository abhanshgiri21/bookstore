'use strict';

var mongoose = require('mongoose');

var categoryModel = function(){
    var categorySchema = mongoose.Schema({
        name:String,
        
    });

    //Shorten text
    

    return mongoose.model('Category', categorySchema);
};


module.exports = new categoryModel();