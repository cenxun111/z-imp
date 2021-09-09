const router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')
const auth = require("../middlewore/auth");
router.post('/register',authCtrl.register)

router.post('/login', authCtrl.login)

router.post('/logout', authCtrl.logout)

router.post('/refresh_token', authCtrl.generateAccessToken)

router.patch('/addtocart',auth,authCtrl.addCart)

module.exports = router

