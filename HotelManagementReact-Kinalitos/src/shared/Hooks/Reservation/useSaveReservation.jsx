import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveHotelRequest } from "../../../services/api"
import toast from 'react-hot-toast'

export const useSaveReservation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const saveReservation = async (reservation) => {
    setIsLoading(true)
    const response = await saveReservationRequest(reservation)
    setIsLoading(false)
    if (response.error) {
      toast.error('Error al guardar el reservacion')
    } else {
      toast.success('Reservacion guardado con éxito!')
    }
    navigate('/reservacion')
  }


  return {
    isLoading,
    saveReservation
  }
}