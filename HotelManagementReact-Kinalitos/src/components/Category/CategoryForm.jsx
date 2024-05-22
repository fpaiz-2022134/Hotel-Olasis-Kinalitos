import { useState, useEffect } from "react"
import { useSaveCategory } from "../../shared/hooks/Category/useSaveCategory"
import { getCategoryRequest } from "../../services/api"
import { useDeleteCategory } from "../../shared/hooks/Category/useDeleteCategory"
import toast from "react-hot-toast"
import { useUpdateCategory } from "../../shared/hooks/Category/useUpdateCategory"

export const CategoryForm = ({ selectedCategory }) => {
    const { isLoading, saveCategory } = useSaveCategory()
    const { updateCategory } = useUpdateCategory()
    const { deleteCategory } = useDeleteCategory()
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })
    const [categories, setCategories] = useState([])

     useEffect(() => {
        const fetchData = async () => {
            const categoriesResponse = await getCategoryRequest();
            if (Array.isArray(categoriesResponse.data)) {
                setCategories(categoriesResponse.data)
             } else {
                console.error("Error al obtener categorías.", categoriesResponse)
            }
        }
         fetchData()

     }, [])

    useEffect(() => {
        if (selectedCategory) {
            setFormData({
                name: selectedCategory.name,
                description: selectedCategory.description
            })
        }
    }, [selectedCategory])


    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        saveCategory(formData)
    }

    const handleDelete = async () => {
        if (selectedCategory) {
            deleteCategory(selectedCategory.id)
        } else {
            toast.error('Error al eliminar, seleccione una fila primero.')
        }
        setFormData({
            name: '',
            description: '',
        })
        selectedCategory(null)
    }

    const handleUpdate = async () => {
        if (selectedCategory) {
            updateCategory(
                selectedCategory.id,
                formData
            )
        } else {
            toast.error('Seleccione una categoría para actualizar.')
        }
        setFormData({
            name: '',
            description: '',
        })
        selectedCategory(null)
    }

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
        })
        selectedCategory(null)
    }
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#4ba9df', width: '100%', height: '75vh', marginLeft: '20px' }}>
            <div style={{ marginBottom: '60px' }}>
                <h2 className="hotel-card-title">Categoría</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="category" className="form-label hotel-card-title">Nombre</label>
                <select value={formData.category} onChange={handleChange} name="category" className="form-control" id="category">
                    <option value="">Seleccione una categoría</option>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label hotel-card-title">Descripción</label>
                <input value={formData.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" />
            </div>
            <div className="d-flex justify-content-center" >
                <button style={{ marginRight: '2em' }} type="submit" className="btn btn-success"  disabled={isLoading}>Agregar</button>
                <button style={{ marginRight: '2em' }} type="button" className="btn btn-primary" onClick={handleUpdate} >Actualizar</button>
                <button style={{ marginRight: '2em' }} type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                <button style={{ marginRight: '2em' }} type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
            </div>
            </form>
        </div >

    )

}



