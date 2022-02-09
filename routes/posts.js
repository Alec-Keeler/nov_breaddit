const express = require('express');
const router = express.Router();
const { Post } = require('../db/models');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true })

const authCheck = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
}

router.get('/' , async(req, res) => {
    const posts = await Post.findAll()
    let userId = 0;
    if (req.session.user) {
        userId = req.session.user.userId
    }
    res.render('posts', {posts, userId})
})

router.get('/new', authCheck, csrfProtection, (req, res) => {
    res.render('new-post', {csrfToken: req.csrfToken()})
})

router.post('/', csrfProtection, async(req, res) => {
    const { content, subId } = req.body
    const post = await Post.create({
        content,
        userId: req.session.user.userId,
        subId
    })
    res.redirect('/posts')
})

module.exports = router;