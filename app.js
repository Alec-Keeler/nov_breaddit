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

// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))