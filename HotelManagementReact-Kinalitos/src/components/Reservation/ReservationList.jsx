/*import { useState, useEffect } from "react"
import {getReservationsRequest, getRoomRequest} from "../../services/api"

export const ReservationList = ({ setSelectedReservation}) => {
    const [reservations, setReservations] = useState([])
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reservationsResponse = await getReservationsRequest()
                if(reservationsResponse.data && Array.isArray(reservationsResponse.data.reservations)){
                    setReservations(reservationsResponse.data.reservations)
                }else {
                    console.error("Error al obtener Reservaciones", reservationsResponse)
                }

                const roomsResponse = await getRoomRequest()
                if(Array.isArray(roomsResponse.data.rooms)){
                    setRooms(roomsResponse.data.rooms)
                }else {
                    console.error("Error al obtener habitacion:", roomsResponse)
                }
                
            } catch (error) {
                console.error("Error al obtener reservaciones, habitaciones", error)
                
            }
        }

        fetchData()

    }, [])

    const getRoomNumberById = (roomId) => {
        const room = rooms.find(room => String(room._id) === String(roomId))
        return room ? room.number : 'Habitacion no encontrada'
    }

    const handleRowClick = (reservation) => {
        setSelectedReservation(reservation)
    }

    return (
        <div>
            <div className="container" style={{ marginLeft: '1em', maxWidth: '84em', overflowX: 'auto', maxHeight: '65vh' }}>
                <table className="table" style={{ width: '81em' }}>
                    <thead>
                        <tr className="text-center">
                            <th>Fecha Entrada</th>
                            <th>Fecha Salida</th>
                            <th>Precio</th>
                            <th>Huéspedes</th>
                            <th>Habitacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation._id} onClick={() => handleRowClick(reservation)}>
                                <td>{reservation.entryDate}</td>
                                <td>{reservation.departureDate}</td>
                                <td>{reservation.price}</td>
                                <td>{reservation.room.map(roomId => getRoomNumberById(roomId))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}*/