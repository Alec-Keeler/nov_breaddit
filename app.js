// Task 1a
const express = require('express');
// Task 13b
const cookieParser = require('cookie-parser');

const app = express();

// Task 3a
app.set('view engine', 'pug')
// Task 8
app.use(express.static('./public'))

// Task 13a
app.use(express.urlencoded({extended: false}))
// Task 13b
app.use(cookieParser())

// Task 12a
app.use((req, res, next) => {
    req.banana = true
    next()
})

// Task 6b
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
// app.use('/profile', usersRouter)

// Task 7
app.get(/^\/(home)[st]?$/, (req, res) => {
    console.log('banana?', req.banana)
    console.log('potato?', req.potato)
    res.send('Regex handler')
})

app.all('*', (req, res) => {
    res.send('We could not find the page you were looking for D:')
})

// top level resource path
// /users

// nested resource path
// /users/1/posts/4/comments

// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))