'use strict'

import { Router } from 'express'

import { addReservation, updateReservation, searchReservation, changeStatus, getReservations} from './reservation.controller.js'


const api = Router()

api.post('/addReservation', addReservation)
api.put('/updateR/:id',updateReservation)
api.get('/searchReservation/:id', searchReservation)
api.put('/changeStatus/:id',changeStatus)
api.get('/getReservations', getReservations)
export default api