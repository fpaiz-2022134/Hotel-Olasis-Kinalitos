import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2880/',
    timeout: 5000
})


export const registerRequest = async(data) => {
    try{
      return await apiClient.post('/user/register', data)
    }catch(err){
      return{
        error: true,
        err 
      }
    }
  }
  
  export const loginRequest = async(data) => {
    try{
      return await apiClient.post('/user/login', data)
    }catch(err){
      return{
        error: true,
        err 
      }
    }
  }




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


export const getHotelsRequest = async()=>{
    try {
        return await apiClient.get('/hotel/getHotels')    
    } catch (err) {
       return{
        error: true,
        err
       } 
    }
}


// ----------------------------------------------------------------

// ---------------------- INVOICE  --------------------------------



export const getInvoicesRequest = async()=>{
  try {
    return await apiClient.get('/hotel/getHotels')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}





