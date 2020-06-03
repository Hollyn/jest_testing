let router = require('express').Router()
let Book = require('../models/book')


router.post('/add', (req, res, next) => {
    const newBook = new Book(req.body)

    Book.addBook(newBook, (err, book) => {
        if (err) res.json({
            status: 404,
            message: 'Cannot register this book'
        })
        res.json({
            status: 200,
            book: book
        })
    })
})

router.get('/', (req, res, next) => {
    Book.getAll((err, books) => {
        if (err) res.json({
            status: 404,
            message: 'Error ' + err
        })

        if (books.length == 0) {
            res.json({
                status: 204,
                message: "No book has been registered yet"
            })
        }

        res.json({
            status: 200,
            books: books
        })
    })
})


module.exports = router