import { InvoiceForm } from "../../components/Invoice/InvoiceForm";
import { InvoiceList } from "../../components/Invoice/InvoiceList";


import { useState } from "react";



export const Invoice = () => {
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <InvoiceForm selectedInvoice={selectedInvoice} />
            </div>
            <div>
                <InvoiceList setSelectedInvoice={setSelectedInvoice} /> {/* Pasar setSelectedHotel como prop */}
            </div>
        </div>
    )
}
