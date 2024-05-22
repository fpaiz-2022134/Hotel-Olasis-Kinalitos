'use strict'

import { Router } from 'express'

import { saveRoom, addRoom, updateRoom, deleteRoom, getRooms, searchRoomById} from './room.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate-jwt.js'


const api = Router()

api.post('/saveRoom', saveRoom)
api.post('/add', addRoom)
api.put('/update/:id', updateRoom)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteRoom)
api.get('/getRooms', getRooms)
api.get('/searchRoom/:id', [validateJwt],searchRoomById)
export default api