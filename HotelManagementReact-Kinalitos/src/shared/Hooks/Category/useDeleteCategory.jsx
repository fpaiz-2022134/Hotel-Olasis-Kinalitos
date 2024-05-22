import toast from "react-hot-toast"
import { deleteCategoryRequest } from "../../../services/api"

export const useDeleteCategory = () => {
    const deleteCategory = async(id)=>{
        const response = await deleteCategoryRequest(id)
        if(response.error){
            toast.error('Error al eliminar.')
        }else{
            toast.success('Categoría eliminada.')
        }
    }
  return {
    deleteCategory
  }
}
