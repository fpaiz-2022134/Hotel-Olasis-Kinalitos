import { useState } from "react"
import { getCategoryRequest } from "../../../services/api"

export const useGetCategory = () => {
    const [categories, setCategories] = useState(null)

    const getCategories = async()=>{
        const response = await getCategoriesRequest()
        if(response.error){
            alert(
                response.err.response.data.message ||
                'Error al obtener las categorías.'
            )
        }
        setCategories(response.data)
    }
  return {
    categories,
    isFetching: !hotels,
    getCategories
  }
}
