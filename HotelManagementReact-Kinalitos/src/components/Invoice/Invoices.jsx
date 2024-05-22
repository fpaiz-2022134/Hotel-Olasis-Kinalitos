

import { Link } from "react-router-dom";

import { useState } from "react";

import { useUpdateInvoice } from "../../shared/Hooks/Invoice/useUpdateInvoice";



export const Invoices = ({ invoices = {} }) => {

    const { updatedInvoice, isFetching, updateInvoice } = useUpdateInvoice()

    const [invoice, setInvoice] = useState(
        {
            
        }
    )
}
