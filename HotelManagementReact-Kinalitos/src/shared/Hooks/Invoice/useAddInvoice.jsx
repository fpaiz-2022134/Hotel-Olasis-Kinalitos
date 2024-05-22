
import { useState } from "react"

import { addInvoiceRequest } from "../../../services/api"

import toast from "react-hot-toast"

export const useAddInvoice = () => {
    const [isLoading, setIsLoading] = useState(false)

    const addInvoice = async (nit, paymentMethod, reservation, event) => {
        setIsLoading(true)

        const invoice = {
            nit,
            paymentMethod,
            reservation,
            event
        }

        const response = await addInvoiceRequest(invoice)
        setIsLoading(false)
        if (response.error) {
            if (response?.err.response?.data?.errors) {
                for (const error of response?.err.response?.data?.errors) {
                    return toast.error(
                        error.msg
                    )
                }
            }
        } else {
            return toast.success(
                "Factura creada con exito"
            )
        }

        return {
            addInvoice,
            isLoading
        }
    }
}
