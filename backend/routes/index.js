const router = require('express').Router();

const auth = require('./auth')
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const order = require('./order')
const stripe= require('./stripe')

router.use('/api/auth', auth)
router.use('/api/users', user)
router.use('/api/products', product)
router.use('/api/cart', cart)
router.use('/api/order', order)
router.use('/api/checkout', stripe)

module.exports = router