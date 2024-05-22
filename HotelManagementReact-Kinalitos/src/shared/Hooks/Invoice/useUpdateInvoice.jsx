import { useState } from "react";

import { updateInvoiceRequest } from "../../../services/api";

import toast from "react-hot-toast";


export const useUpdateInvoice = () => {

    const [updatedInvoice, setUpdatedInvoice] = useState(null)

    const updateInvoice = async (id, invoice) => {
        const response = await updateInvoiceRequest(id, invoice)
        
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
                'Error al actualizar la factura, intenta de nuevo.'
            )

        } else {
            toast.success('¡Factura actualizada correctamente!');
        }

        console.log(response)


        setUpdatedInvoice(response.data)
        toast.success('¡Factura actualizada correctamente!')

        
    }
    return {
        updatedInvoice,
        isFetching: !updatedInvoice,
        updateInvoice
    }


}

