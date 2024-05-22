'use strict'

import Hotel from './hotel.model.js'
import { checkUpdate } from '../utils/validator.js'

import Service from '../service/service.model.js'
import Category from '../category/category.model.js'

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
        let hotelsData = await Hotel.find()
        
        //Creamos una lista de promesas para buscar hoteles y su información
        const hotelsInformation = await Promise.all(hotelsData.map(async(hotel) =>{
            let services = await Service.find({ _id: { $in: hotel.service} });
            let category = await Category.findById(hotel.category)
            return {
                id: hotel._id,
                name: hotel.name,
                description: hotel.description,
                address: hotel.address,
                phone: hotel.phone,
                email: hotel.email,
                assessment: hotel.assessment,
                service: services.map(service => service.name) ,
                
                category: category ? category.name : 'Category not found',
                image: hotel.image
            }
        }))


        return res.status(200).json({ hotels: hotelsInformation });

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the hotels.' })
    }
}

export const getHotel = async (req, res) => {
    try {
        //Getting the id
        let {id} = req.params
        //Finding the hotel
        let hotel = await Hotel.findById(id)
        //Verifying the hotel
        if (!hotel) return res.status(404).send({ message: 'Hotel not found.' })
        return res.status(200).send(hotel)
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error getting the hotel.'})
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




