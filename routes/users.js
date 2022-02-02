// Task 6a

const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Task 2
router.get('/', async (req, res) => {
    // res.send('Welcome to Breaddit')

    // Task 3b
    // res.render('users', {num: 1000000})

    // Task 5
    const users = await User.findAll();

    res.render('users', { users })
})

// Task 4
router.get('/:userId(\\d+)', async (req, res) => {
    // console.log(req.params.userId)
    const userId = req.params.userId
    const user = await User.findByPk(userId)

    // console.log(user)

    res.render('profile', { user })
})

// Task 11a
router.get('/signup', (req, res) => {
    res.send('hello from signup page')
})

//Task 6b
module.exports = router;