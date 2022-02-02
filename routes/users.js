// Task 6a

const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Task 12b
router.use((req, res, next) => {
    console.log('we have arrived at the users router')
    req.potato = true
    next()
})

// Task 12c
const emailChecker = (req, res, next) => {
    // const exp = /^[\w\-]+@[\w]+\.([a-zA-Z]{2,3})$/;
    // if (exp.test(req.body.email)) {
    //     next()
    // } else {
    //     req.errors = ['Email is invalid']
    //     next()
    // }
    console.log('hello from route specific middleware')
}

// Task 2
router.get('/', async (req, res) => {
    // res.send('Welcome to Breaddit')

    // Task 3b
    // res.render('users', {num: 1000000})

    // Task 5
    const users = await User.findAll();
    console.log('banana?', req.banana)

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
    // res.send('hello from signup page')

    res.render('signup')
})

// Task 11c
router.post('/signup', emailChecker, (req, res) => {
    console.log('hello from post route')
})

//Task 6b
module.exports = router;