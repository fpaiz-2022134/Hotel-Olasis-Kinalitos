import React, { useState } from 'react'

import { getReservationsRequest } from "../../../services/api"

export const useGetReservations = () => {
    const [reservations, setReservations] = useState(null)

    const getReservations = async () => {
        const response = await getReservationsRequest()
        if (response.error) {
            if (response?.err?.response?.data?.errors) {
                let arr = response?.err?.response?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }

            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error al registrar la reservacion, intentalo de nuevo'
            )
        }

        console.log(response)
        setReservations(response.data.reservations)
    }

    return {


        reservations,
        isFetching: !reservations,
        getReservations

    }
}
