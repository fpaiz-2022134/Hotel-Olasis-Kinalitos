import { Route, Routes } from "react-router-dom";

import { HotelCard } from "./HotelCard";

import { useEffect } from "react";

import { useGetHotels } from "../../shared/Hooks/Hotel/useGetHotels"

import { ClockLoader } from "react-spinners";



export const ShowHotels = () => {
    const { hotels, getHotels, isFetching } = useGetHotels()
    useEffect(() => {
        getHotels()
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
                <Route path="showHotel" element={<HotelCard hotels={hotels} />}>
                </Route>
            </Routes>
        </div>
    )


}

