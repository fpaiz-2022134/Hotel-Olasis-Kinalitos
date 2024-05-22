import { useState } from "react"
import { getReservationsRequest } from "../../../services/api"

export const useGetReservations = () => {
    const [reservations, setReservations] = useState(null)

    const getReservations = async() => {
        const response = await getReservationsRequest()
        if(response.error){
            alert(
                response.error.response.data.message ||
                'Error al obtener la reservacion'
            )
        }

        setReservations(response.data)
    }

    return {
        reservations,
        isFetching: !reservations,
        getReservations
    }
}
