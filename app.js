// Task 1a
const express = require('express');
const { User } = require('./models');

const app = express();

// Task 3a
app.set('view engine', 'pug')

// Task 2
app.get('/', (req, res) => {
    // res.send('Welcome to Breaddit')

    // Task 3b
    res.render('users', {num: 1000000})
})

// Task 4
app.get('/users/:userId', async (req, res) => {
    // console.log(req.params.userId)
    const userId = req.params.userId
    const user = await User.findByPk(userId)

    // console.log(user)

    res.render('profile', {user})
})




// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))