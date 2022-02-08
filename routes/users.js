// Task 6a

const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');

// Task 17b
const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

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

    res.render('signup', {csrfToken: req.csrfToken(), errors: [], user: {}})
})

// Task 11c Task 13b
router.post('/signup', csrfProtection, emailChecker, asyncHandler(async (req, res, next) => {
    console.log('body:', req.body)
    console.log(req.errors)

    const {username, password, email, likesBread} = req.body
    if (req.errors) {
        // Task 13d
        res.render('signup', { csrfToken: req.csrfToken(), errors: req.errors, user: req.body })
    } else {
        // Task 17a
        // try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await User.create({
                username,
                hashedPassword,
                email,
                likesBread
            })
            res.redirect('/users')
        // } catch (err) {
        //     next(err)
        // }
    }
}))

// Task 20a
router.get('/login', csrfProtection, (req, res) => {
    res.render('login', {csrfToken: req.csrfToken()})
    // res.send('hello from login')
})

// Task 20c
router.post('/login', csrfProtection, asyncHandler(async(req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({
        where: {
            email
        }
    })

    const isPass = await bcrypt.compare(password, user.hashedPassword)
    if (isPass) {
        res.redirect('/users')
    } else {
        // res.render('login')
        // re render the form with csrf and email and an error
        res.send('failed to login')
    }
}))

//Task 6b
module.exports = router;