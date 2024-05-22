'use strict'

import Reservation from './reservation.model.js'


export const addReservation = async(req, res)=>{
    try {
        let data = req.body
        let reserva = new Reservation(data)
        await reserva.save()
        return res.status(200).send({message: 'Reservation registered successfully.'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({mesage: 'Error creating the reservation.'})
    }
}

export const updateReservation = async(req, res) =>{
    try {
        let {id} = req.params
        let data = req.body
        let updateReservation = await Reservation.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updateReservation)  return res.status(401).send({ message: 'Reservation not found and not updated' })
        return res.send({ message: 'Updated Room', updateReservation })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error updating reservation' })
    }
}

export const changeStatus = async(req, res) =>{
    try {
        let {id} = req.params
        let data = { status: false } // solo actualiza el campo status a false
        let updateReservation = await Reservation.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updateReservation)  return res.status(401).send({ message: 'Reservation not found and not updated' })
        return res.send({ message: 'Updated Reservation', updateReservation })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error updating reservation' })
    }
}

export const searchReservation = async(req, res) =>{
    try {
        let {id} = req.params
        let reservation = await Reservation.findById(id)
        if(!reservation) return res.status(404).send({ message: 'Reservation not found' })
        return res.send({ message: 'Reservation found', reservation })
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error searching reservation'})
    }
}

export const getReservations = async (req, res) => {
    try {
        let data = await Reservation.find()

        const Reservaciones = data
            .map((data) => {
                return {
                    id: data._id,
                    entryDate: data.entryDate,
                    departureDate: data.departureDate,
                    price: data.price,
                    roomId: data.roomId
                }
            })
        return res.status(200).json({Reservations: Reservaciones})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the reservations.' })
    }
}
