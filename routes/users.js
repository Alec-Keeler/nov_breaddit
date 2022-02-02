// Task 6a

const express = require('express');
const router = express.Router();
const { User } = require('../models');
const csrf = require('csurf');

// Task 13b
const csrfProtection = csrf({cookie: true})

// Task 12b
router.use((req, res, next) => {
    console.log('we have arrived at the users router')
    req.potato = true
    next()
})

// Task 12c Task 13c
const emailChecker = (req, res, next) => {
    const exp = /^[\w\-]+@[\w]+\.([a-zA-Z]{2,3})$/;
    if (exp.test(req.body.email)) {
        next()
    } else {
        req.errors = ['Email is invalid']
        next()
    }
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

// Task 11a Task 13b
router.get('/signup', csrfProtection, (req, res) => {
    // res.send('hello from signup page')

    res.render('signup', {csrfToken: req.csrfToken()})
})

// Task 11c Task 13b
router.post('/signup', csrfProtection, emailChecker, async (req, res) => {
    console.log('body:', req.body)
    console.log(req.errors)

    const {username, password, email, likesBread} = req.body
    if (req.errors) {
        res.render('signup', { csrfToken: req.csrfToken(), errors: req.errors })
    } else {
        const user = await User.create({
            username,
            password,
            email,
            likesBread
        })
        res.redirect('/users')
    }
})

//Task 6b
module.exports = router;