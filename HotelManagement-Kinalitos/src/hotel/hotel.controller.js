'use strict'

import Hotel from './hotel.model.js'
import { checkUpdate } from '../utils/validator.js'

export const test = (req, res) => {
    return res.send('Hello World')
}

export const addHotel = async (req, res) => {
    try {
        //Getting the information
        let data = req.body
        //Creating the hotel
        let hotel = new Hotel(data)
        //Saving the information
        await hotel.save()
        //Answer
        return res.status(200).send({ message: 'Hotel registered successfully.' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ mesage: 'Error creating the hotel.' })
    }
}


export const getHotels = async (req, res) => {
    try {
<<<<<<< HEAD
        let data = await Hotel.find()

        const hotelsInformation = data
            .map((data) => {
                return {
                    id: data._id,
                    name: data.name,
                    description: data.description,
                    address: data.address,
                    phone: data.phone,
                    email: data.email,
                    assessment: data.assessment,
                    service: data.service,
                    category: data.category,
                    image: data.image
                }
            })
        return res.status(200).json({hotels: hotelsInformation})
=======
        let hotels = await Hotel.find()
        return res.status(200).send(hotels)
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the hotels.' })
    }
}

export const getHotel = async (req, res) => {
    try {
        //Getting the id
<<<<<<< HEAD
        let { id } = req.params
=======
        let {id} = req.params
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
        //Finding the hotel
        let hotel = await Hotel.findById(id)
        //Verifying the hotel
        if (!hotel) return res.status(404).send({ message: 'Hotel not found.' })
        return res.status(200).send(hotel)
    } catch (err) {
        console.error(err)
<<<<<<< HEAD
        return res.status(500).send({ message: 'Error getting the hotel.' })
=======
        return res.status(500).send({message: 'Error getting the hotel.'})
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
    }
}

export const updateHotel = async (req, res) => {
    try {
        //Getting data
        let data = req.body
        //Getting the id of the product
        let { id } = req.params
        //Checking if the data is valid
        let update = checkUpdate(data, id)
        //Checking the result
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be update or missing.' })
        //Updating the Hotel
        let updatedHotel = await Hotel.updateOne(
            { _id: id },
            data,
            { new: true }
        )
        //Validation of the updated action
        if (!updatedHotel) return res.status(400).send({ message: 'Hotel not found.' })
        return res.status(200).send({ message: 'The hotel has been updated successfully.' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating the hotel' })
    }
}

export const deleteHotel = async (req, res) => {
    try {
        //Getting id
        let { id } = req.params
        //Finding and deleting
        let deletedHotel = await Hotel.findByIdAndDelete({ _id: id })
        //Verifying the deleted action
        if (!deletedHotel) return res.status(404).send({ message: 'Hotel not found.' })
        //Replying
        return res.status(200).send({ message: 'The hotel has been deleted successfully.' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting the hotel.' })
    }
}




