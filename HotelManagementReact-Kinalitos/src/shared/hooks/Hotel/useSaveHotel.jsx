import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveHotelRequest } from "../../../services/api"
import toast from 'react-hot-toast'

export const useSaveHotel = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const saveHotel = async (hotel) => {
    setIsLoading(true)
    const response = await saveHotelRequest(hotel)
    setIsLoading(false)
    if (response.error) {
      toast.error('Error al guardar el Hotel')
    } else {
      toast.success('¡Hotel guardado con éxito!')
    }
    navigate('/hotel')
  }


  return {
    isLoading,
    saveHotel
  }
}