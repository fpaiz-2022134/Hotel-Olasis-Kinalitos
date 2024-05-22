import { useState } from "react"
import { getHotelesRequest } from "../../../services/api"

export const useGetHotel = () => {
    const [hotels, sethoteles] = useState(null)

    const getHoteles = async()=>{
        const response = await getHotelesRequest()
        if(response.error){
            alert(
                response.err.response.data.message ||
                'Error al obtener los hoteles'
            )
        }
        sethoteles(response.data)
    }
  return {
    hotels,
    isFetching: !hotels,
    getHoteles
  }
}
