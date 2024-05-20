import { Route, Routes } from "react-router-dom"

import { RoomCard } from "./RoomCard"

import { useEffect } from "react"
import { useGetRooms } from "../../shared/Hooks/Room/useGetRooms"

import { ClockLoader } from "react-spinners"



export const ShowRooms = () => {
    
    const {rooms, getRooms, isFetching} = useGetRooms()

    useEffect(()=>{
        getRooms()
    }, [])


    if (isFetching) {
        return (
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <ClockLoader />
            </div>
        )
    }

    return (
        <div>
            <Routes>
                <Route path="show" element={<RoomCard rooms={rooms} />} />
            </Routes>
        </div>


    )
}
