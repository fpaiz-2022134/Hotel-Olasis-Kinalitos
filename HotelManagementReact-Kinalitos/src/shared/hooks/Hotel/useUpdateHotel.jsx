import { useState } from "react"
import { updateHotelRequest } from "../../../services/api"
import toast from "react-hot-toast"

export const useUpdateHotel = () => {
    const [updatedHotel, setUpdatedHotel] = useState(null)

    const updateHotel = async (id, hotel) => {
        const response = await updateHotelRequest(id, hotel)
        if (response.error) {
            toast.error('Error al actualizar')
        } else {
            setUpdatedHotel(response.data)
            toast.success('Actualizado correctamente')
        }

    }
    return {
        updatedHotel,
        isFetching: !updatedHotel,
        updateHotel
    }
}
