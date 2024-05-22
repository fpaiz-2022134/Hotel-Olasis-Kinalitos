import { useState, useEffect } from "react"
import { useSaveHotel } from "../../shared/hooks/Hotel/useSaveHotel"
import { getCategoryRequest, getServiceRequest } from "../../services/api"
import { useDeleteHotel } from "../../shared/hooks/Hotel/useDeleteHotel"
import toast from 'react-hot-toast'
import { useUpdateHotel } from "../../shared/hooks/Hotel/useUpdateHotel"

export const HotelForm = ({ selectedHotel }) => {
    const { isLoading, saveHotel } = useSaveHotel()
    const { updateHotel } = useUpdateHotel()
    const { deleteHotel } = useDeleteHotel()
    const [formData, setFormData] = useState({
        _id: null,
        name: '',
        description: '',
        address: '',
        phone: '',
        email: '',
        assessment: '',
        service: '',
        category: '',
        image: ''
    })

    const [services, setServices] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await getCategoryRequest();
                if (Array.isArray(categoriesResponse.data)) {
                    setCategories(categoriesResponse.data)
                } else {
                    console.error("Error al obtener categorías:", categoriesResponse)
                }

                const servicesResponse = await getServiceRequest()
                if (Array.isArray(servicesResponse.data.services)) {
                    setServices(servicesResponse.data.services)
                } else {
                    console.error("Error al obtener servicios:", servicesResponse)
                }
            } catch (error) {
                console.error("Error al obtener categorías y servicios:", error)
            }
        }
        //ESto se ejecutara la función fetchData al montar el componente por primera vez
        fetchData()
        // El arreglo de dependencias vacío asegurara 
        //que la funcion se ejecute solo una vez al montar el componente
    }, [])

    useEffect(() => {
        // Actualiza el formulario con los datos del hotel seleccionado
        if (selectedHotel) {
            setFormData({
                name: selectedHotel.name,
                description: selectedHotel.description,
                address: selectedHotel.address,
                phone: selectedHotel.phone,
                email: selectedHotel.email,
                assessment: selectedHotel.assessment,
                service: selectedHotel.service,
                category: selectedHotel.category,
                image: selectedHotel.image
            })
        }
    }, [selectedHotel])

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

    const handleDelete = async () => {
        if (selectedHotel) {
            deleteHotel(selectedHotel.id)
        } else {
            toast.error('Error al eliminar, seleccione una fila primero')
        }
        setFormData({
            _id: '',
            name: '',
            description: '',
            address: '',
            phone: '',
            email: '',
            assessment: '',
            service: '',
            category: '',
            image: ''
        })
        selectedHotel(null)
    }

    const handleUpdate = async () => {
        if (selectedHotel) {
            updateHotel(
                selectedHotel.id,
                formData
            )
        } else {
            toast.error('Seleccione un hotel para actualizar.')
        }
        setFormData({
            _id: '',
            name: '',
            description: '',
            address: '',
            phone: '',
            email: '',
            assessment: '',
            service: '',
            category: '',
            image: ''
        })
        selectedHotel(null)
    }

    const handleCancel = () => {
        setFormData({
            _id: '',
            name: '',
            description: '',
            address: '',
            phone: '',
            email: '',
            assessment: '',
            service: '',
            category: '',
            image: ''
        })
        selectedHotel(null)
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#4ba9df', width: '100%', height: '75vh', marginLeft: '20px' }}>
            <div style={{ marginBottom: '60px'}}>
                <h2 className="hotel-card-title">Hotel</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label hotel-card-title">Nombre</label>
                        <input value={formData.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label hotel-card-title">Teléfono</label>
                        <input value={formData.phone} onChange={handleChange} name="phone" type="text" className="form-control" id="phone" />
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label hotel-card-title">Dirección</label>
                        <input value={formData.address} onChange={handleChange} name="address" type="text" className="form-control" id="address" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="service" className="form-label hotel-card-title">Tipos de Servicios</label>
                        <select value={formData.service} onChange={handleChange} name="service" className="form-control" id="service">
                            <option value="">Seleccione un servicio</option>
                            {services.map(service => (
                                <option key={service._id} value={service._id}>{service.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '45em' }}>
                    <div className="col-md-6">
                        <label htmlFor="assessment" className="form-label hotel-card-title">Calificación</label>
                        <input value={formData.assessment} onChange={handleChange} name="assessment" type="text" className="form-control" id="assessment" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label hotel-card-title">Tipos de Categorías</label>
                        <select value={formData.category} onChange={handleChange} name="category" className="form-control" id="category">
                            <option value="">Seleccione una categoría</option>
                            {categories.map(category => (
                                <option key={category._id} value={category._id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label hotel-card-title">Email</label>
                    <input value={formData.email} onChange={handleChange} name="email" type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label hotel-card-title">Descripción</label>
                    <input value={formData.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" style={{ width: '100%', height: '6em' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label hotel-card-title">Imagen URL</label>
                    <input value={formData.image} onChange={handleChange} name="image" type="text" className="form-control" id="image" />
                </div>
                <div className="d-flex justify-content-center" >
                    <button style={{ marginRight: '2em' }} type="submit" className="btn btn-success" disabled={isLoading}>Agregar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-primary" onClick={handleUpdate} >Actualizar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}