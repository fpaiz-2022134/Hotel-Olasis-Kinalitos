import { useState } from "react"
import { getServiceRequest } from "../../../services/api"

export const useGetService = () => {
    const [services, setservices] = useState(null)

    const getServices = async()=>{
        const response = await getServiceRequest()
        if(response.error){
            alert(
                response.err.response.data.message ||
                'Error al obtener los Servicios'
            )
        }
        setservices(response.data)
    }
  return {
    services,
    isFetching: !services,
    getServices
  }
}