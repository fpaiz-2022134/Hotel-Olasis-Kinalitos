import { useState } from "react";
import { updateServiceRequest } from "../../../services/api";
import toast from "react-hot-toast";

export const useUpdateService = () => {
    const [updatedService, setUpdatedService] = useState(null)

    const updateService = async (id, service) => {
        const response = await updateServiceRequest(id, service)
        if (response.error) {
            toast.error('Error al actualizar hi')
        } else {
            setUpdatedService(response.data)
            toast.success('Actualizado correctamente')
        }
    }
    return {
        updatedService,
        isFetching: !updatedService,
        updateService
    }
}