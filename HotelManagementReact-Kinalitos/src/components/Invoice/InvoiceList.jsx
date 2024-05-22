import { useState, useEffect } from "react";

import { getEventsRequest, getInvoicesRequest, getReservationsRequest, getUsersRequest} from "../../services/api";



export const InvoiceList = ({setSelectedInvoice}) => {
  
    const [invoices, setInvoices ] = useState([])
    const [users, setUsers] = useState([])
    const [reservations, setReservations] = useState([])
    const [events, setEvents] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const invoicesResponse = await getInvoicesRequest()
                if(invoicesResponse.data && Array.isArray(invoicesResponse.data.invoices)){
                    setInvoices(invoicesResponse.data.invoices)
                } else {
                    console.error("Error al obtener facturas:", invoicesResponse)
                }

                const reservationsResponse = await getReservationsRequest()
                if (Array.isArray(reservationsResponse.data.reservations)) {
                    setReservations(reservationsResponse.data.reservations)
                } else {
                    console.error("Error al obtener reservaciones:", reservationsResponse)
                }

                const eventsResponse = await getEventsRequest()
                if (Array.isArray(eventsResponse.data.events)) {
                    setEvents(eventsResponse.data.events)
                } else {
                    console.error("Error al obtener eventos:", eventsResponse)
                }

                const usersResponse = await getUsersRequest()
                if (Array.isArray(usersResponse.data.users)) {
                    setUsers(usersResponse.data.users)
                } else {
                    console.error("Error al obtener eventos:", usersResponse)
                }

                } catch (err) {
                    console.error("Error al obtener facturas:", err)
    
            }
            
        }
        fetchData()
    }, [])

    const getUserNameById = (userId)=>{
        const user = users.find(user => String(user._id) === String(userId))
        return user ? user.name : 'Usuario no encontrada'
    }
    const getReservationDescripById = (reservationId)=>{
        const reservation = reservations.find(reservation => String(reservation._id) === String(reservationId))
        return reservation ? reservation.description : 'Reservación no encontrada'
    }

    const getEventNameById = (eventId)=>{
        const event = events.find(event => String(event._id) === String(eventId))
        return event? event.name : 'Evento no encontrado'
    }

    const handleRowClick = (invoice) => {
        setSelectedInvoice(invoice)
    }


    return (
        <div>
            <div className="container" style={{ marginLeft: '1em', maxWidth: '84em', overflowX: 'auto', maxHeight: '65vh' }}>
                <table className="table" style={{ width: '81em' }}>
                    <thead>
                        <tr className="text-center">
                            <th>NIT</th>
                            <th>Descripción</th>
                            <th>Fecha de Entrada</th>
                            <th>Fecha de Salida</th>
                            <th>total</th>
                            <th>Método de pago</th>
                            <th>Usuario</th>
                            <th>Reservación</th>
                            <th>Evento</th>
                            <th>Fecha de facturación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(invoice => (
                            <tr key={invoice.id} onClick={() => handleRowClick(invoice)}>
                                <td>{invoice.nit}</td>
                                <td>{invoice.description}</td>
                                <td>{invoice.entryDate}</td>
                                <td>{invoice.departureDate}</td>
                                <td>{invoice.total}</td>
                                <td>{invoice.paymentMethod}</td>
                                <td>{getUserNameById(invoice.user)}</td>
                                <td>{getReservationDescripById(invoice.reservation)}</td>
                                <td>{getEventNameById(invoice.event)}</td>
                                <td>{invoice.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}




