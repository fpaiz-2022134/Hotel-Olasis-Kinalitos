import { useState, useEffect } from "react"
import './HotelCard.css'
import { getServiceRequest, getCategoryRequest } from "../../services/api"

export const HotelClient = ({ hotels = [] }) => {
    const [services, setServices] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const servicesResponse = await getServiceRequest()
                if (Array.isArray(servicesResponse.data.services)) {
                    setServices(servicesResponse.data.services)
                } else {
                    console.error("Error al obtener servicios:", servicesResponse)
                }

                const categoriesResponse = await getCategoryRequest()
                if (Array.isArray(categoriesResponse.data)) {
                    setCategories(categoriesResponse.data)
                } else {
                    console.error("Error al obtener categorías:", categoriesResponse)
                }
            } catch (error) {
                console.error("Error al obtener servicios y categorías:", error)
            }
        };
        fetchData()
    }, [])

    const getServiceNameById = (serviceId) => {
        const service = services.find(service => String(service._id) === String(serviceId))
        return service ? service.name : 'Servicio no encontrado'
    };

    const getCategoryNameById = (categoryId) => {
        const category = categories.find(category => String(category._id) === String(categoryId))
        return category ? category.name : 'Categoría no encontrada'
    };

    const hotelList = Array.isArray(hotels) ? hotels : hotels.hotels || []

    return (
        <>
             <div className="d-flex flex-column align-items-center" style={{ backgroundColor: '#27c834', color: 'white', width: '100%', padding: '2em' }}>
                <h2 className="moving-text" style={{ fontSize: '3em', margin: '0' }}>Hoteles</h2>
            </div>
            <div className="hotel-list d-flex justify-content-center flex-wrap">
                {hotelList.map((hotel) => (
                    <div key={hotel.id} className="hotel-card card text-center">
                        <img src={hotel.image} alt={hotel.name} />
                        <div className="card-header">
                            <h5 className="hotel-card-title">{hotel.name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="hotel-card-text"><strong>Descripción:</strong> {hotel.description}</p>
                            <p className="hotel-card-text"><strong>Dirección:</strong> {hotel.address}</p>
                            <p className="hotel-card-text"><strong>Teléfono:</strong> {hotel.phone}</p>
                            <p className="hotel-card-text-user"><strong>Email:</strong> {hotel.email}</p>
                            <p className="hotel-card-text-user"><strong>Calificación:</strong> {hotel.assessment}</p>
                            <p className="hotel-card-text-user"><strong>Servicios:</strong> {hotel.service.map(serviceId => getServiceNameById(serviceId))}</p>
                            <p className="hotel-card-text-user"><strong>Categoría:</strong> {getCategoryNameById(hotel.category)}</p>
                            <div className="star">
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                            </div>
                            <div className="hotel-card-buttons d-flex justify-content-center">
                                <button className="hotel-card-button text-white rounded-pill px-3 py-2 ms-3">
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
