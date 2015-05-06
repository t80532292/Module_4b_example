var express = require('express');
var books = require('./books');
//var bodyParser = require('body-parser');
//var idManager = require('./idManager');
//idManager.setIds(books.getBooks());
//
var app = express();
//
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json);
//
var serverstatic = express.static('public');
app.use(serverstatic);

app.get('/books', function(request, response) {
    var booklist = books.getBooks();
    response.json(booklist);
});

app.get('/books/:id', function(request, response) {
    var id = request.param.id;
    var book = books.getBook(id);

    if (book) {
        response.json(book);
    } else {
        response.status(404).json('Book ' + id + ' not found');
    }
});
//
//app.post('/books', function(request, response) {
//    var newBook = request.body;
//    if (newBook) {
//        newBook.read = false;
//        newBook._id = idManager.getId();
//        books.addBook(newBook);
//        response.status(201).json(newBook);
//    } else {
//        response.status(400).json('problem adding book');
//    }
//
//});
//
app.delete('/books/:id', function(request, response) {
   var id = request.params.id;

    books.removeBook(id);
    response.sendStatus(200);
});

app.listen(8000, function() {
    console.log("listing on port 8000");
});


