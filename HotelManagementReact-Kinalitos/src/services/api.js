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
    return await apiClient.get('/invoice/getInvoices')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}

export const addInvoiceRequest = async(data) =>{
  try {
   return await apiClient.post('/invoice/addInvoice', data)   
  } catch (err) {
    error: true,
    err
  }
}


export const updateInvoiceRequest = async(id, data)=>{
  try {
    return await apiClient.put(`/invoice/updateInvoice/${id}`, data)  
  } catch (err) {
    error: true,
    err
  }
}



// -----------------------------------------------------------------

//------------------------ RESERVATION ----------------------------

export const getReservationsRequest = async()=>{
  try {
    return await apiClient.get('/reservation/getReservations')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}


// -----------------------------------------------------------------

//------------------------ EVENT ----------------------------------

export const getEventsRequest = async()=>{
  try {
    return await apiClient.get('/event/getEvents')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}


//------------------------------------------------------------------------
//------------------------ USERS -------------------------------------

export const getUsersRequest = async()=>{
  try {
    return await apiClient.get('/user/get')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}








