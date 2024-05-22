import axios from "axios"

<<<<<<< HEAD
const apiCliente = axios.create({
    baseURL: 'http://localhost:2880',
    timeout: 5000
})

export const registerRequest = async(data) => {
  try{
    return await apiCliente.post('/user/register', data)
  }catch(err){
    return{
      error: true,
      err 
    }
  }
}

export const loginRequest = async(data) => {
  try{
    return await apiCliente.post('/user/login', data)
  }catch(err){
    return{
      error: true,
      err 
    }
  }
}

export const saveHotelRequest = async(data)=>{
  try{
      return await apiCliente.post('/hotel/addHotel', data)
  }catch(err){
      return {
          error: true,
          err
      }
  }
}

export const getHotelesRequest = async() => {
  try{
    return await apiCliente.get('/hotel/getHotels')
  }catch(err){
    return {
      error: true,
      err
    }
  }
}

export const deleteHotelRequest = async(id, data) => {
  try{
    return await apiCliente.delete(`/hotel/deleteHotel/${id}`, data)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}

export const updateHotelRequest = async(id, hotel) => {
  try{
    return await apiCliente.put(`/hotel/updateHotel/${id}`, hotel)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}


export const saveCategoryRequest = async(data)=>{
  try{
      return await apiCliente.post('/category/addCategory', data)
  }catch(err){
      return {
          error: true,
          err
      }
  }
}

export const getCategoryRequest = async()=>{
  try{
      return await apiCliente.get('/category/getCategories')
  }catch(err){
      return {
          error: true,
          err
      }
  }
}

export const deleteCategoryRequest = async(id, data) => {
  try{
    return await apiCliente.delete(`/category/deleteCategory/${id}`, data)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}

export const updateCategoryRequest = async(id, category) => {
  try{
    return await apiCliente.put(`/category/updateCategory/${id}`, category)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}


export const getServiceRequest = async()=>{
  try{
      return await apiCliente.get('/service/get')
  }catch(err){
      return {
          error: true,
          err
      }
  }
}

=======
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
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
