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
module.exports.getOne = (id, callback) => {
    Book.findById(id, callback)
}
module.exports.update = (id, body, callback) => {
    Book.findByIdAndUpdate(id, body, callback)
}
module.exports.delete = (id, callback) => {
    Book.findByIdAndRemove(id, callback)
}
module.exports.deleteAll = (callback) => {
    Book.deleteMany({}, callback)
}