const express = require('express');
const cors = require('cors');
const morgan =require('morgan');
const helmet = require('helmet');

const mongoose = require('mongoose');
// const shortUrl = require('../models/shortUrl');

const app = express()
app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

const port = process.env.PORT || 1337
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
// app.get('/', async (req, res) => {
//     res.json({
//         message: 'Url shortener'
//     })

  

// })
/***
 * get short url by id
 */
app.get('/url/:id', async (req, res) => {
    res.json({
        message: 'Url shortener'
    })
})
/**
 * redirect to url
 */
 app.get('/:id', async (req, res) => {
    res.json({
        message: 'Url shortener'
    })
})
/**
 * create url
 */
app.post('/url/:id', async (req, res) => {
    res.json({
        message: 'Url shortener'
    })
})
app.post('/url', async (req, res) => {
    res.json({
        message: 'Url shortener'
    })
})

app.listen(port, () => {
    console.log(`URL shortener listening at http://localhost:${port}`)
})