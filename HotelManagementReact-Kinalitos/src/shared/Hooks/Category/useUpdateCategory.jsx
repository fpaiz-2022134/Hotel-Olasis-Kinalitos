import { useState } from "react"
import { updateCategoryRequest } from "../../../services/api"
import toast from "react-hot-toast"

export const useUpdateCategory = () => {
    const [updatedCategory, setUpdatedCategory] = useState(null)

    const updateCategory = async (id, category) => {
        const response = await updateCategoryRequest(id, category)
        if (response.error) {
            toast.error('Error al actualizar')
        } else {
            setUpdatedCategory(response.data)
            toast.success('Actualizado correctamente')
        }

    }
    return {
        updatedCategory,
        isFetching: !updatedCategory,
        updateCategory
    }
}
