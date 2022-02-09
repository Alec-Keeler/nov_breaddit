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

router.get('/' , csrfProtection, async(req, res) => {
    const posts = await Post.findAll()
    let userId = 0;
    if (req.session.user) {
        userId = req.session.user.userId
    }
    // Task 23a
    res.render('posts', {posts, userId, csrfToken: req.csrfToken()})
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

// Task 23b
router.post('/:id/delete', csrfProtection, async(req, res) => {
    const postId = req.params.id
    const post = await Post.findByPk(postId)
    await post.destroy();
    res.redirect('/posts')
})

// Task 24d
router.delete('/:id', async(req, res) => {
    const postId = req.params.id
    const post = await Post.findByPk(postId)
    await post.destroy();

    res.json({message: 'Success'})
})

// Task 25
router.put('/:id', async(req, res) => {
    console.log('hello from post edit route')
    const { content } = req.body;

    const post = await Post.findByPk(req.params.id)
    post.content = content
    await post.save()
    res.json({data: post})
})

module.exports = router;