import { useState } from "react";

import toast from "react-hot-toast";

import { getHotelsRequest } from "../../../services/api";



export const useGetInvoice = () => {

    const [invoices, setInvoices] = useState()


    const getInvoices = async () => {
        const response = await getHotelsRequest();
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
                response?.err.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error al obtener los hoteles'
            )

        } else {
            toast.success('Facturas obtenidas correctamente.')
        }

        console.log(response)
        setInvoices(response.data.invoices)
    }

    return {
        invoices,
        isFetching: !hotels,
        getInvoices
    }
}
