import { Route, Routes } from "react-router-dom"
import { HotelClient } from "./HotelClient"
import { useEffect } from "react"
import { useGetHotel } from "../../shared/hooks/Hotel/useGetHotel"
import { ClockLoader } from "react-spinners"

export const ShowHotels = () => {
    const { hotels, getHoteles, isFetching } = useGetHotel()
    useEffect(() => {
        getHoteles()
    }, [])

    if (isFetching) {
        return(
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <ClockLoader/>
            </div>
        )
    }

    return (
        <div>
            <Routes>
                <Route path="showHotel" element={<HotelClient hotels={hotels} />}>
                </Route>
            </Routes>
        </div>
    )
}