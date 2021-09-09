const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')


router.post('/createnewsPost',postCtrl.createNewsPost)

router.get('/allPost',postCtrl.allPost)

router.get('/post/:id',postCtrl.singlePost)

router.get('/user_posts/:username',postCtrl.getUserPosts)

module.exports = router