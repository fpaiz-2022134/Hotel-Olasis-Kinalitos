import React from "react"

import "../Reservation/Reservation.css"
import { ClockLoader } from 'react-spinners'
import { useEffect } from "react"
import { useGetReservation} from "../../shared/Hooks/Reservation/useGetReservations"
import { Link } from "react-router-dom"


export const Reservation = () => {

    // Traer datos de la reservación

    const { reservations, getReservations, isFetching } = useGetReservation()
    useEffect(() => {
        getReservations()
    }, [])

    if (isFetching) {
        return (
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <ClockLoader />
            </div>
        )
    }


    return (
        <>
            <link

                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap"
                rel="stylesheet"
            />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymus" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>


        <div className='all-center'>

            <div className='home'>
                <div className='container'>
                    <div className='main-text'>
                        <h1>
                            Reservacion 
                        </h1>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}
