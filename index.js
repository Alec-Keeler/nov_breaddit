const { User, Post, sequelize, Sequelize: { Op } } = require('./models');

async function buildUser() {
    const user = User.build({
        username: 'beefwellington105',
        email: 'welliesarentreal@bread.com',
        password: 'theCakeIsALie'
    })
    await user.save();

    sequelize.close()
}

// buildUser() ^^^^

async function createPost(subId) {
    const post = await Post.create({
        content: 'I Like Bread',
        userId: 5,
        subId
    })
    console.log(post)
    sequelize.close()
}

// createPost(2)


async function findUserByPk(userId) {
    const user = await User.findByPk(userId)

    console.log(user)

    sequelize.close()
}

// findUserByPk(3)

async function changeEmail(newEmail, userId) {
    const user = await User.findByPk(userId);

    user.email = newEmail

    await user.save()
}

// changeEmail('test@email.com', 5)

async function destroyPost(postId) {
    const post = await Post.findByPk(postId)

    await post.destroy()

    sequelize.close()
}

// destroyPost(3)

async function findAllPosts() {
    const posts = await Post.findAll()

    console.log(posts)

    sequelize.close()
}

// findAllPosts()

async function findSubsPosts(subId) {
    const posts = await Post.findAll({
        where: {
            subId
        }
    })

    console.log(posts)

    sequelize.close()
}

// findSubsPosts(2)

async function findPostWithUserId(userId, subId) {
    const posts = await Post.findAll({
        where: {
            subId,
            userId
        }
    })

    console.log(posts)

    sequelize.close()
}

// findPostWithUserId(3, 1)

async function searchPosts(term) {
    const posts = await Post.findAll({
        where: {
            content: {
                [Op.iLike]: `%${term}%`
            }
        },
        order: [['userId', 'ASC']],
        limit: 1
    })

    console.log(posts)

    sequelize.close()
}

// searchPosts('i')

async function findUserByEmail(email) {
    const user = await User.findOne({
        // where: {
        //     email
        // }
    })

    console.log(user)

    sequelize.close()
}

// findUserByEmail('billy@bread.com')

async function testOrder() { 
    const posts = await Post.findAll({
        order: [['content', 'ASC'], ['userId', 'ASC']],
        raw: true
    })

    console.log(posts)
    sequelize.close()
}

testOrder()