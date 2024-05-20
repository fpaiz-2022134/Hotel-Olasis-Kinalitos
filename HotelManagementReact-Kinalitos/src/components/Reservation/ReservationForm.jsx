import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const ReservationForm = ({ selectedReservation }) => {

    const { isLoading, saveReservation } = useSaveReservation()
    const { deleteReservation } = useDeleteReservation()
    const [formData, setFormData] = useState({

        entryDate: '',
        departureDate: '',
        price: '',
        room: ''
    })

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomsResponse = await getRoomRequest()
                if (Array.isArray(roomsResponse.data)) {
                    setRooms(roomsResponse.data)
                } else {
                    console.error("Error al obtener habitacion", roomsResponse)
                }

            } catch (error) {
                console.error("Error al obtener habitaciones", error)

            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (selectedReservation) {
            setFormData({
                entryDate: selectedReservation.entryDate,
                departureDate: selectedReservation.departureDate,
                price: selectedReservation.price,
                room: selectedReservation.room
            })
        }
    }, [selectedReservation])

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        saveHotel(formData)
    }


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'yellow', width: '100%', height: '65vh', marginLeft: '20px' }}>
            <div style={{ marginBottom: '60px' }}>
                <h2>Reservation</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">entryDate</label>
                        <input value={formData.entryDate} onChange={handleChange} name="entryDate" type="text" className="form-control" id="entryDate" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">departureDate</label>
                        <input value={formData.departureDate} onChange={handleChange} name="departureDate" type="text" className="form-control" id="departureDate" />
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Price</label>
                        <input value={formData.price} onChange={handleChange} name="price" type="text" className="form-control" id="price" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="service" className="form-label">Room</label>
                        <select value={formData.room} onChange={handleChange} name="room" className="form-control" id="room">
                            <option value="">Seleccione una habitacion</option>
                            {services.map(room => (
                                <option key={room._id} value={room._id}>{room.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </form>
        </div>
    )
}
