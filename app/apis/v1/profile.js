import express from 'express'

import * as ProfileController from '../../controllers/profile'
import {protectRoute, adminProtectRoute} from '../../utils/middleware'

const router = express.Router()

router.patch('/update/:id', protectRoute, ProfileController.update)
router.get('/:id', ProfileController.retrieve)
router.get('/filter/:page/:limit/:description_like/:sort/:order', adminProtectRoute, ProfileController.list)

export default router
