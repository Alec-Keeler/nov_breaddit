// Task 1a
const express = require('express');
const { User } = require('./models');

const app = express();

// Task 3a
app.set('view engine', 'pug')

// Task 6b
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
app.use('/profile', usersRouter)

// Task 7
app.get(/^\/(home)[st]?$/, (req, res) => {
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