import { useState } from "react";
import toast from "react-hot-toast";

import { getHotelsRequest } from "../../../services/api";

export const useGetHotels = () => {
    const [hotels, setHotels] = useState(null)

    const getHotels = async () => {
        const response = await getHotelsRequest();
        if (response.error) {
            if (response?.err.response?.data?.errors) {
                for (const error of response?.err.response?.data?.errors) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                response?.err.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error al obtener los hoteles'
            )
        } else {
            toast.success('Hoteles obtenidos correctamente.')
        }

        console.log(response)

        setHotels(response.data.hotels)
    }

    return {
        hotels,
        isFetching:!hotels,
        getHotels
    }
}