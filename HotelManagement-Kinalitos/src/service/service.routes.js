'use strict'

import { Router } from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import { deleteS, getHotels, getS, saveS, searchS, updateS } from './service.controller.js'

const api = Router()

api.post('/save', [validateJwt, isAdmin], saveS)
api.put('/update/:id', [validateJwt, isAdmin], updateS)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteS)

<<<<<<< HEAD
api.get('/get', getS)
=======
api.get('/get',[validateJwt], getS)
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
api.get('/search/:id',[validateJwt], searchS)
api.get('/gethotel/:id',[validateJwt], getHotels)

export default api