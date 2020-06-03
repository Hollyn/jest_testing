const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = Book = mongoose.model('Book', bookSchema)

module.exports.addBook = (newBook, callback) => {
    newBook.save(callback)
}

module.exports.getAll = (callback) => {
    Book.find({}, callback)
}