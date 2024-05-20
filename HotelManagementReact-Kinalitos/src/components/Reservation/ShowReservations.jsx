import { Route, Routes} from "react-router-dom"

import { useEffect } from "react"
import { useGetReservations } from "../../shared/Hooks/Reservation/useGetReservations"

import { ClockLoader } from "react-spinners"
import { Reservation } from "../../pages/Reservation/Reservation"

export const ShowReservations = () => {
    const { reservations, getReservations, isFetching} = useGetReservations()

    useEffect(() => {
        getReservations()
    }, [])

    if (isFetching) {
        return (
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <ClockLoader/>
            </div>
        )
    }

    return (
        <div>
            <Routes>
                <Route path="show" element={<ReservationCard reservations={reservations} />} />
            </Routes>
        </div>
    )

}