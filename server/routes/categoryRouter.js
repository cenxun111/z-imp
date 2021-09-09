const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middlewore/auth')
const authAdmin = require('../middlewore/authAdmin')
router.get('/category',categoryCtrl.getCategories)
router.post('/category',auth,authAdmin,categoryCtrl.createCategory)

module.exports = router