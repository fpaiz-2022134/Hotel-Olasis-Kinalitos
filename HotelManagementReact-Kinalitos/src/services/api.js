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

export const saveReservationRequest = async(data)=>{
    try{
        return await apiCliente.post('/reservation/addReservation', data)
    }catch(err){
        return {
            error: true,
            err
        }
    }
  }

  export const getReservationRequest = async() => {
    try{
      return await apiCliente.get('/reservation/getReservations')
    }catch(err){
      return {
        error: true,
        err
      }
    }
  }
