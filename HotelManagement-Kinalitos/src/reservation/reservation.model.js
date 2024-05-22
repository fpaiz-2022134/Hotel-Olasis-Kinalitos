import { Schema, model } from "mongoose"

const reservationSchema = Schema({

    entryDate:{
        type: Date,
        required: true
    },
    departureDate:{
        type: Date,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    
    roomId: {
        type: Schema.ObjectId,
        ref: 'room',
        required: true
    }
})

export default model('reservation', reservationSchema)