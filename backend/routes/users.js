import express from 'express'
import { deleteUser, updateUser, getSingleUser, getAllUser} from '../controllers/userController.js'
const router = express.Router()

import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'

//update User 
router.put('/:id', verifyUser, updateUser)

//delete User 
router.delete('/:id', verifyUser, deleteUser)

//get single User 
router.get('/:id', verifyUser, getSingleUser)

//getAllUser User 
router.get('/', verifyAdmin, getAllUser)

export default router;