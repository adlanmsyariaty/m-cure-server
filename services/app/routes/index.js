const express = require('express')
const router = express.Router()
const loginRouter = require('./loginRouter')
const registerRouter = require('./registerRouter')
const userRouter = require('./userRouter')
const consultantRouter = require('./consultantRouter')
const categoryRouter = require('./categoryRouter')
const { adminAuthentication } = require('../middlewares/authentication')

router.use('/categories', categoryRouter)
router.use('/users', userRouter)
router.use('/login', loginRouter)
router.use(adminAuthentication)
router.use('/consultants', consultantRouter)
router.use('/register', registerRouter)

module.exports = router