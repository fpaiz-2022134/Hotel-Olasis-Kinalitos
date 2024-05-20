'use strict'

import Room from './room.model.js'

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
        let data = await Room.find()

        const rooms = data
        .map((data)=>{
            return{
                id: data._id,
                number: data.number,
                description: data.description,
                capacity: data.capacity,
                type:data.type,
                price: data.price,
                status: data.status,
                hotelid: data.hotelid
            }
        })

        return res.status(200).json({rooms})

        
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting rooms'})
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