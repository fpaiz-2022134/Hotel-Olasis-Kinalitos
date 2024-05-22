import { useState, useEffect } from "react"
import { getCategoryRequest } from "../../services/api"
import './CategoryCard.css'

export const CategoryList = ({ setSelectedCategory }) => {
    const [categories, setCategories] = useState([])

    const getCategoryNameById = (categoryId) => {
        const category = categories.find(category => String(category._id) === String(categoryId))
        return category ? category.name : 'Categoría no encontrada'
    }

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
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(hotel => (
                            <tr key={category.id} onClick={() => handleRowClick(hotel)}>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}