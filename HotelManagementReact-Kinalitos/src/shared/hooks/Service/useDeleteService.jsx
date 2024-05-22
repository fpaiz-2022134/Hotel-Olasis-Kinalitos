import toast from "react-hot-toast"
import { deleteServiceRequest } from "../../../services/api"

export const useDeleteService = () =>{
    const deleteService = async(id)=>{
        const response = await deleteServiceRequest(id)
        if(response.error){
            toast.error('Error al eliminar')
        }else{
            toast.success('Servicio eliminado')
        }
    }
    return {
        deleteService
  }
}