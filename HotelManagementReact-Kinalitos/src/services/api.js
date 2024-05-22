import axios from "axios"

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


export const saveServiceRequest = async(data)=>{
  try{
      return await apiCliente.post('/service/save', data)
  }catch(err){
      return {
          error: true,
          err
      }
  }
}


export const deleteServiceRequest = async(id, data) => {
  try{
    return await apiCliente.delete(`/service/delete/${id}`, data)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}

export const updateServiceRequest = async(id, service) => {
  try{
    return await apiCliente.put(`/service/updateS/${id}`, service)
  }catch(err){
    return{
      error: true,
      err
    }
  }
}
