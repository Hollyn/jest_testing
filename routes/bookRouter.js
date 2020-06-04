let router = require('express').Router()
let Book = require('../models/book')
let mongoose = require('mongoose')

router.post('/add', (req, res, next) => {
   const newBook = new Book(req.body)

   Book.addBook(newBook, (err, book) => {
      if (err)
         res.json({
            status: 404,
            message: 'Cannot register this book',
         })
      res.json({
         status: 200,
         book: book,
      })
   })
})

router.get('/', (req, res, next) => {
   if (Object.keys(req.query).length > 0 && req.query.id !== 0) {
      if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
         res.json({
            status: 404,
            message: 'This id is not valid',
         })
      } else {
         Book.getOne(req.query.id, (err, book) => {
            if (err)
               res.json({
                  status: 404,
                  message: 'Error: ' + err,
               })

            if (book)
               res.json({
                  status: 200,
                  book: book,
               })
            else
               res.json({
                  status: 204,
                  message: 'This id does not exist in the database',
               })
         })
      }
   } else {
      Book.getAll((err, books) => {
         if (err)
            res.json({
               status: 404,
               message: 'Error ' + err,
            })

         if (books.length == 0)
            res.json({
               status: 204,
               message: 'No book has been registered yet',
            })
         else
            res.json({
               status: 200,
               books: books,
            })
      })
   }
})

router.post('/edit', (req, res, next) => {
   if (Object.keys(req.query).length > 0 && req.query.id !== 0) {
      if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
         res.json({
            status: 404,
            message: 'This id is not valid',
         })
      } else {
         Book.update(req.query.id, req.body, (err, book) => {
            if (err)
               res.json({
                  status: 404,
                  message: 'Error: ' + err,
               })

            if (book)
               res.json({
                  status: 200,
                  book: {
                     _id: book.id,
                     title: req.body.title,
                     author: req.body.author,
                     __v: book.__v,
                  },
               })
            else
               res.json({
                  status: 204,
                  message: 'This id does not exist in the database',
               })
         })
      }
   }
})

router.delete('/delete', (req, res, next) => {
   if (Object.keys(req.query).length > 0 && req.query.id !== 0) {
      if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
         res.json({
            status: 404,
            message: 'This id is not valid',
         })
      } else {
         Book.delete(req.query.id, (err, book) => {
            if (err)
               res.json({
                  status: 404,
                  message: 'Error: ' + err,
               })

            if (book)
               res.json({
                  status: 200,
                  book: {
                     _id: book.id,
                     title: req.body.title,
                     author: req.body.author,
                     __v: book.__v,
                  },
               })
            else
               res.json({
                  status: 204,
                  message: 'This id does not exist in the database',
               })
         })
      }
   } else {
      Book.deleteAll(err => {
         if (err)
            res.json({
               status: 404,
               message: 'Error: ' + err,
            })
         else
            res.json({
               status: 200,
               message: 'All documents have been deleted',
            })
      })
   }
})

module.exports = router
