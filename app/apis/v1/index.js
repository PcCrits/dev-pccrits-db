import express from 'express'

import userRoutes from './user'
import productRoutes from './product'
import categoryRoutes from './category'
import profileRoutes from './profile'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/profile', profileRoutes)
router.use('/product', productRoutes)
router.use('/category', categoryRoutes)

export default router
