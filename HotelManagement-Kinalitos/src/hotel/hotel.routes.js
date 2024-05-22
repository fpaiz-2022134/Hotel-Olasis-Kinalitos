'use strict'

import express from 'express'
import {
    isAdmin,
    isClient,
    validateJwt
}  from '../middlewares/validate-jwt.js'


import {
    test,
    addHotel,
    getHotels,
    getHotel,
    updateHotel,
    deleteHotel
} from './hotel.controller.js'

const api = express.Router()

api.post('/test', test)
<<<<<<< HEAD
api.post('/addHotel', addHotel)
api.get('/getHotels', getHotels)
api.get('/getHotel/:id', [validateJwt],getHotel)
api.put('/updateHotel/:id',updateHotel)
api.delete('/deleteHotel/:id', deleteHotel)
=======
api.post('/addHotel', [validateJwt, isAdmin], addHotel)
api.get('/getHotels', [validateJwt],getHotels)
api.get('/getHotel/:id', [validateJwt],getHotel)
api.put('/updateHotel/:id', [validateJwt, isAdmin],updateHotel)
api.delete('/deleteHotel/:id', [validateJwt, isAdmin],deleteHotel)
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5

export default api