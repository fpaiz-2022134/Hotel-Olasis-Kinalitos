'use strict'

import { Schema, model } from 'mongoose'

const hotelSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    email: {
        type: String,
        required: true
    },
    assessment: {
        type: String,
        required: true
    },
    service: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'service',
            required: true
        }]
    }

    ,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
<<<<<<< HEAD
    },
    image :{
        type: String,
        required: false
=======
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
    }
})

export default model('hotel', hotelSchema)