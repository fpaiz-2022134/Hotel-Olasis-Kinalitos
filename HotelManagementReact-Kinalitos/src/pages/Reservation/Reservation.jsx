import { ReservationForm } from "../../components/Reservation/ReservationForm";
import {ReservationList } from "../../components/Reservation/ReservationList"
import { useState } from "react";

export const Reservation = () => {
    const [selectedReservation, setselectedReservation] = useState(null);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <ReservationForm selectedReservation={selectedReservation} />
            </div>
            <div>
                <ReservationList setselectedReservation={setselectedReservation} /> {/* Pasar setSelectedReservation como prop */}
            </div>
        </div>
    )
}