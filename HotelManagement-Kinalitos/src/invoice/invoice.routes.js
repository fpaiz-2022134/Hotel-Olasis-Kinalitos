'use strict'

import {
    validateJwt,
    isClient,
    isAdmin
} from '../middlewares/validate-jwt.js'

import express from 'express'

import {
    addInvoice,
    getMyInvoices,
    getInvoices,
    searchInvoice,
    updateInvoice,
    createPDFReservation,
    createPDFEvent
    
    
    /* ,
    deleteInvoice */
} from './invoice.controller.js'

const api = express.Router()

api.post('/addInvoice', [validateJwt, isClient], addInvoice)
api.get('/getMyInvoices', [validateJwt, isClient], getMyInvoices)
api.get('/getInvoices', /* [validateJwt, isAdmin],  */getInvoices)
api.get('/searchInvoice/:id', [validateJwt], searchInvoice)
api.put('/updateInvoice/:id', /* [validateJwt], */ updateInvoice)
api.get('/createPDFReservation/:id', createPDFReservation)
api.get('/createPDFEvent/:id', createPDFEvent)
/* api.delete('/deleteInvoice', [validateJwt, isAdmin], deleteInvoice) */



export default api