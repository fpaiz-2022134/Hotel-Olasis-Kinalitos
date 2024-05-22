import { useState } from "react"
import { categoryRequest } from '../../services/api.js'
import toast from 'react-hot-toast'


export const useCategory = () =>{
    const [ isCategory, setCategory] = useState(false)
    const category = async(category, name, description) =>{
        setCategory(true)
        const category = {
            category,
            name, 
            description
        }
        const response = await categoryRequest(category)
        setCategory(false)
        if(response.error){
            if(response?.err.response?.data?.error){
                for(const error of response?.data?.error){
                    return toast.error(
                    error.msg
                    )
                }
            }
            return toast.error(
                response?.err.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error'
            )
        }else{
            toast.success('Éxito.')
        }
        console.log(response)
    }

    return {
        category,
        isCategory
    }
}