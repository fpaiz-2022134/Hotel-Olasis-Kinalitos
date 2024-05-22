'use strict'

import express from 'express'

import {
    validateJwt,
    isAdmin,
    isClient
} from '../middlewares/validate-jwt.js'

import {
    addCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
}from './category.controller.js'

const api = express.Router()

api.post('/addCategory', addCategory)
api.get('/getCategories', getCategories)
api.get('/getCategory/:id', [validateJwt, isAdmin], getCategory)
api.put('/updateCategory/:id', [validateJwt, isAdmin],updateCategory)
api.delete('/deleteCategory/:id', [validateJwt, isAdmin], deleteCategory)

export default api