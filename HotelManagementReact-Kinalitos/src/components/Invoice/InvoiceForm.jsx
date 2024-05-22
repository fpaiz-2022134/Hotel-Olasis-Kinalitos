import { useState, useEffect } from "react"

import { useAddInvoice } from "../../shared/Hooks/Invoice/useAddInvoice"
import { getReservationsRequest } from "../../services/api"
import { getEventsRequest } from "../../services/api"
import toast from 'react-hot-toast'
import { useUpdateInvoice } from "../../shared/Hooks/Invoice/useUpdateInvoice"
import { getInvoicesRequest } from "../../services/api"
import { getUsersRequest } from "../../services/api"


export const InvoiceForm = ({ selectedInvoice, setSelectedInvoice }) => {
    /* const { isLoading, addInvoice } = useAddInvoice() */

    const { updateInvoice } = useUpdateInvoice()

    const [formData, setFormData] = useState({
        id: null,
        nit: '',
        description: '',
        entryDate: '',
        departureDate: '',
        total: '',
        paymentMethod: '',
        user: '',
        reservation: '',
        event: '',
        date: ''

    })

    const [invoices, setInvoices] = useState([])
    const [reservations, setReservations] = useState([])
    const [events, setEvents] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const invoicesResponse = await getInvoicesRequest()
                if (invoicesResponse.data && Array.isArray(invoicesResponse.data.invoices)) {
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

    useEffect(() => {
        if (selectedInvoice) {
            setFormData({
                nit: selectedInvoice.nit,
                description: selectedInvoice.description,
                entryDate: selectedInvoice.entryDate,
                departureDate: selectedInvoice.departureDate,
                total: selectedInvoice.total,
                paymentMethod: selectedInvoice.paymentMethod,
                user: selectedInvoice.user,
                reservation: selectedInvoice.reservation,
                event: selectedInvoice.event,
                date: selectedInvoice.date,

            })
        }
    }, [selectedInvoice])

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

     const handleSubmit = async (e) => {
        e.preventDefault()
        addInvoice(formData)
    } 



    const handleUpdate = async () => {
        if (selectedInvoice) {
            updateInvoice(
                selectedInvoice.id,
                formData
            )
        } else {
            toast.error('Seleccione un hotel para actualizar.')
        }
        setFormData({
            id: '',
            nit: '',
            description: '',
            entryDate: '',
            departureDate: '',
            total: '',
            paymentMethod: '',
            user: '',
            reservation: '',
            event: '',
            date: ''
        })
        setSelectedInvoice(null)
    }

    const handleCancel = () => {
        setFormData({
            id: '',
            nit: '',
            description: '',
            entryDate: '',
            departureDate: '',
            total: '',
            paymentMethod: '',
            user: '',
            reservation: '',
            event: '',
            date: ''
        })
        setSelectedInvoice(null)
    }


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#4ba9df', width: '100%', height: '65vh', marginLeft: '20px' }}>
            
            <div style={{ marginBottom: '60px' }}>
                <h2>Facturas</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="nit" className="form-label">NIT</label>
                        <input value={formData.nit} onChange={handleChange} name="nit" type="text" className="form-control" id="nit" />
                    </div>
                  {/*   <div className="col-md-6">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input value={formData.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input value={formData.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="entryDate" className="form-label">Fecha de Entrada</label>
                        <input value={formData.entryDate} onChange={handleChange} name="entryDate" type="text" className="form-control" id="entryDate" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="departureDate" className="form-label">Fecha de Salida</label>
                        <input value={formData.departureDate} onChange={handleChange} name="entryDate" type="text" className="form-control" id="entryDate" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="total" className="form-label">Total</label>
                        <input value={formData.total} onChange={handleChange} name="total" type="text" className="form-control" id="total" />
                    </div> */}
                    <div className="col-md-6">
                        <label htmlFor="paymentMethod" className="form-label">Método de Pago</label>
                        <input value={formData.paymentMethod} onChange={handleChange} name="paymentMethod" type="text" className="form-control" id="paymentMethod" />
                    </div>
                    {/* <div className="col-md-6">
                        <label htmlFor="user" className="form-label">Usuario</label>
                        <input value={formData.user} onChange={handleChange} name="user" type="text" className="form-control" id="user" />
                    </div> */}
                </div>
                
                <div className="row mb-3" style={{ width: '45em' }}>
                    
                    <div className="col-md-6">
                        <label htmlFor="reservation" className="form-label">Reservación</label>
                        <select value={formData.reservation} onChange={handleChange} name="reservation" className="form-control" id="reservation">
                            <option value="">Seleccione una reservación</option>
                            {reservations.map(reservation => (
                                <option key={reservation._id} value={reservation._id}>{reservation.description}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="event" className="form-label">Event</label>
                        <select value={formData.event} onChange={handleChange} name="event" className="form-control" id="event">
                            <option value="">Seleccione un evento</option>
                            {events.map(event => (
                                <option key={event._id} value={event._id}>{event.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center" >
                    {/* <button style={{ marginRight: '2em' }} type="submit" className="btn btn-success" disabled={isLoading}>Agregar</button> */}
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-primary" onClick={handleUpdate} >Actualizar</button>
                    {/* <button style={{ marginRight: '2em' }} type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button> */}
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )


}

