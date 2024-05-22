import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveServiceRequest } from "../../../services/api";
import toast from "react-hot-toast";

export const useSaveService = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
  
    const saveService = async (service) => {
      setIsLoading(true)
      const response = await saveServiceRequest(service)
      setIsLoading(false)
      if (response.error) {
        toast.error('Error al guardar el Servicio')
      } else {
        toast.success('¡Servicio guardado con éxito!')
      }
      navigate('/service')
    }
  
  
    return {
      isLoading,
      saveService
    }
  }