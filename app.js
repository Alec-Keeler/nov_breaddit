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
app.use(cookieParser('password'))

// Task 12a
app.use((req, res, next) => {
    req.banana = true
    next()
})

app.use((req, res, next) => {
    console.log('before', req.session)
    next()
})

// Task 21a
const session = require('express-session');
app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: false
}))

// app.use((req, res, next) => {
//     req.session.banana = true
//     next()
// })

app.use((req, res, next) => {
    console.log('after', req.session)
    next()
})

// Task 6b
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
// app.use('/profile', usersRouter)

// Task 7
app.get(/^\/(home)[st]?$/, (req, res) => {
    // console.log('banana?', req.banana)
    // console.log('potato?', req.potato)
    console.log(req.session)
    res.send('Regex handler')
})

// app.all('*', (req, res) => {
//     res.send('We could not find the page you were looking for D:')
// })

// Task 16a
app.use((req, res, next) => {
    console.log('This page could not be found D:')
    const err = new Error('page not found')
    next(err)
})

app.use((req, res, next) => {
    console.log('BANANA')
    next()
})

// Task 16b
app.use((err, req, res, next) => {
    // console.log('hello from error handler')
    console.log(err.message)
    res.send('you have arrived at the error handler')
})

// top level resource path
// /users

// nested resource path
// /users/1/posts/4/comments

// Task 1b
// const port = 8080;
// app.listen(port, () => console.log(`Listening on port ${port}...`))
module.exports = app;