'use strict';

var Book = require('../models/bookModel');


module.exports = function (router) {

    router.get('/', function (req, res) {
        Book.find({}, function(err, books){
            if(err){
                console.log(err);
            }

            //this is not working, error is cannot read property 'substring' of undefined
            // books.forEach(function(book){
            //     book.trunkText(90);
            // });
            var model = {
                books: books
            }
            res.render('index', model);
        });
          
    });

};
