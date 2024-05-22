import toast from "react-hot-toast"
import { deleteHotelRequest } from "../../../services/api"

export const useDeleteHotel = () => {
    const deleteHotel = async(id)=>{
        const response = await deleteHotelRequest(id)
        if(response.error){
            toast.error('Error al eliminar')
        }else{
            toast.success('Hotel eliminado')
        }
    }
  return {
    deleteHotel
  }
}
