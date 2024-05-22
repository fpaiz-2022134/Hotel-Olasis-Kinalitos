import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2880/',
    timeout: 5000
})
export const getRoomsRequest = async()=>{
    try {
        return await apiClient.get('/room/getRooms')   
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//Conexión a la base de datos.
export const addCategory = async(data)=>{
    try{
        return await apiClient.post('/category/addCategory', data)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}


export const getCategory = async()=>{
    try{
        return await apiClient.get('/category/getCategory')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const deleteCategory = async(id, data)=>{
    try{
        return await apiClient.delete(`/category/deleteCategory/${id}`, data)
    }catch(err){
        return{
        error: true,
        err
        }
    }
}

export const updateCategory = async(id, category) =>{
    try{
        return await apiClient.put(`/category/updateCategory/${id}`, category)
    }catch(err){
        return{
            error: true,
            err
        }
    }
}
