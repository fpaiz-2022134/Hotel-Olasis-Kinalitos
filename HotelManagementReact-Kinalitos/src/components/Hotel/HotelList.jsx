import { useState, useEffect } from "react"
import { getHotelesRequest, getServiceRequest, getCategoryRequest } from "../../services/api"
import './HotelCard.css'

export const HotelList = ({ setSelectedHotel }) => {
    const [hotels, setHotels] = useState([])
    const [services, setServices] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelsResponse = await getHotelesRequest()
                if (hotelsResponse.data && Array.isArray(hotelsResponse.data.hotels)) {
                    setHotels(hotelsResponse.data.hotels)
                } else {
                    console.error("Error al obtener hoteles:", hotelsResponse)
                }

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
                console.error("Error al obtener hoteles, servicios y categorías:", error)
            }
        }
        fetchData()
    }, [])

    const getServiceNameById = (serviceId) => {
        const service = services.find(service => String(service._id) === String(serviceId))
        return service ? service.name : 'Servicio no encontrado'
    }

    const getCategoryNameById = (categoryId) => {
        const category = categories.find(category => String(category._id) === String(categoryId))
        return category ? category.name : 'Categoría no encontrada'
    }

    // Esta funcion maneja los clic en la tabla 
    const handleRowClick = (hotel) => {
        setSelectedHotel(hotel)
    }

    return (
        <div>
    <div className="container" style={{ marginLeft: '1em', maxWidth: '84em', overflowX: 'auto', maxHeight: '75vh', cursor: 'pointer' }}>
        <table className="table" style={{ width: '81em' }}>
            <thead>
                <tr className="text-center">
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Calificación</th>
                    <th>Servicios</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {hotels.map(hotel => (
                    <tr key={hotel.id} onClick={() => handleRowClick(hotel)}>
                        <td>{hotel.name}</td>
                        <td>{hotel.description}</td>
                        <td>{hotel.address}</td>
                        <td>{hotel.phone}</td>
                        <td>{hotel.email}</td>
                        <td>{hotel.assessment}</td>
                        <td>{hotel.service.map(serviceId => getServiceNameById(serviceId))}</td>
                        <td>{getCategoryNameById(hotel.category)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    )
}