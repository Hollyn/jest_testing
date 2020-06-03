const express = require('express')
const mongoose = require('mongoose')
const bookRouter = require('./routes/bookRouter')
const config = require('./config/database')
const bodyParser = require('body-parser')

mongoose.connect(config.database, {
   useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
   console.log('Connected to ' + config.database)
})
mongoose.connection.on('error', (err) => {
   console.log('Error ' + err)
})



let app = express()

// body parser Middleware
app.use(bodyParser.json())

app.use('/books', bookRouter)

app.listen(3000)