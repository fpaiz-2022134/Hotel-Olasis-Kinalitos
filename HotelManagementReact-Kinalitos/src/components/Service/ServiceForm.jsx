import { useState, useEffect } from "react";
import { useSaveService } from "../../shared/hooks/Service/useSaveService.jsx"
import { useDeleteService } from  "../../shared/hooks/Service/useDeleteService.jsx"
import { useUpdateService } from "../../shared/hooks/Service/useUpdateService.jsx"
import toast from "react-hot-toast";

export const ServiceForm = ({selectedService, setSelectedService}) =>{
    const { isLoading, saveService } = useSaveService()
    const { updateService, isFetching, updatedService } = useUpdateService()
    const { deleteService } = useDeleteService()
    const [formData, setFormData]= useState(
    {
        _id: null,
        name: '',
        description: ''
    })

    useEffect(()=>{
        if(selectedService){
            setFormData({
                name: selectedService.name,
                description: selectedService.description
            })
        }
    },[selectedService] )

    const handleChange = (e) => {
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await saveService(formData)
        location.reload();
    }

    const handleDelete = async () => {
        if (selectedService) {
            deleteService(selectedService.id)
        } else {
            toast.error('Error al eliminar, seleccione una fila primero')
        }
        setFormData({
            id: '',
            name: '',
            description: '',
        })
        setSelectedService(null)
        location.reload();
    }

    const handleUpdate = async () => {
        if (selectedService) {
            updateService(
                selectedService.id,
                formData
            )
        } else {
            toast.error('Seleccione un Servicio para actualizar.')
        }
        setFormData({
            _id: '',
            name: '',
            description: ''
        })
        location.reload();
    }

    const handleCancel = () =>{
        setFormData({
            _id: '',
            name: '',
            description: ''
        })
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#64B494', width: '70%', height: '28em', marginLeft: '10%' }}>
            <div>
                <h2>Servicio</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3" style={{ width: '45em', marginLeft:"15%" }}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input value={formData.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3" style={{ marginLeft:"15%" }}>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input value={formData.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" style={{ width: '28em', height: '6em' }} />
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-center" style={{marginBottom:"5%"}} >
                    <button style={{ marginRight: '2em' }} type="submit" className="btn btn-success" disabled={isLoading}>Agregar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-primary" onClick={handleUpdate} >Actualizar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    <button style={{ marginRight: '2em' }} type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}