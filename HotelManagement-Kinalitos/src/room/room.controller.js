'use strict'

import Room from './room.model.js'
import Hotel from '../hotel/hotel.model.js'


export const saveRoom = async(req, res)=>{
    try{
        let data = req.body
        let room = new Room(data)
        await room.save()
        return res.status(200).send({message: 'Room save Successfull'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error saved Room', err})
    }
}


export const addRoom = async(req, res)=>{
    try {
        let data = req.body
        let room = new Room(data)
        await room.save()
        return res.status(200).send({message: 'Room registered successfully.'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({mesage: 'Error creating the room.'})
    }
}

export const updateRoom = async(req, res) =>{
    try {
        let {id} = req.params
        let data = req.body
        let updateRoom = await Room.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updateRoom)  return res.status(401).send({ message: 'Room not found and not updated' })
        return res.send({ message: 'Updated Room', updateRoom })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error updating room' })
    }
}

export const deleteRoom = async(req, res)=>{
    try{
        let { id } = req.params;
        let deleteRoom = await Room.findOneAndDelete({_id: id});
        if(!deleteRoom) return res.send({message: 'Room not found and not deleted'});
        return res.status(200).send({message: `Room deleted successfully`});
    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error deleting'});
    }
}

export const getRooms = async(req, res) =>{
    try {
        let roomsData = await Room.find();
        
        // Crear una lista de promesas para buscar hoteles
        const roomsWithHotels = await Promise.all(roomsData.map(async (room) => {
            let hotel = await Hotel.findById(room.hotelid);
            return {
                id: room._id,
                number: room.number,
                description: room.description,
                capacity: room.capacity,
                type: room.type,
                price: room.price,
                status: room.status,
                hotelName: hotel ? hotel.name : 'Hotel not found'  // Manejar el caso en que el hotel no se encuentre
            };
        }));
        
        return res.status(200).json({ rooms: roomsWithHotels });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({ message: 'Error retrieving rooms and hotels.' });
    }
}

export const searchRoomById = async(req, res) =>{
    try {
        let { id } = req.params
        let room = await Room.findById(id)
        if(!room) return res.status(404).send({ message: 'Room not found' })
        return res.send({ message: 'Room found', room })
    } catch (error) {
        console.error(error)
    }
}