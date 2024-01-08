import express from 'express'

import * as CategoryController from '../../controllers/category'
import {protectRoute} from '../../utils/middleware'

const router = express.Router()

router.post('/create', protectRoute, CategoryController.create)
router.patch('/update/:id', protectRoute, CategoryController.update)
router.delete('/:id', protectRoute, CategoryController.remove)
router.get('/:id', CategoryController.retrieve)
router.get('/filter/:page/:limit/:description_like/:sort/:order', CategoryController.list)

export default router
