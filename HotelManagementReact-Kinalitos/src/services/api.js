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