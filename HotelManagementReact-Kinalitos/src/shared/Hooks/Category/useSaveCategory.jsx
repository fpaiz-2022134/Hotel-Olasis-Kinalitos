import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveCategoryRequest } from "../../../services/api"
import toast from 'react-hot-toast'

export const useSaveCategory = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const saveCategory = async (category) => {
    setIsLoading(true)
    const response = await saveCategoryRequest(category)
    setIsLoading(false)
    if (response.error) {
      toast.error('Error al guardar la categoría.')
    } else {
      toast.success('¡Categoría guardada con éxito!')
    }
    navigate('/category')
  }

  return {
    isLoading,
    saveCategory
  }
}