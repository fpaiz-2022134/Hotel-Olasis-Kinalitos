import { Link } from "react-router-dom";

import { useState } from "react";

import luxor from "../../assets/Luxor.png"


import './HotelCard.css'

export const HotelCard = ({ hotels = [] }) =>{
    const [hotel, setHotel] = useState(
        {
            id:'',
            name:'',
            description:'',
            address:'',
            phone: '',
            email:'',
            assessment:  '',
            service: '',
            category: '',
            image: ''
        }
    )


    return (
        <div className="hotel-list">
            {hotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card card text-center">

                    <img src={hotel.image} alt="" />
                    <div className="card-header">
                        <h5 className="hotel-card-title">{hotel.name}</h5>
                    </div>
                    <div className="card-body">
                        <p className="hotel-card-text"><strong>Descripción:</strong> {hotel.description}</p>
                        <p className="hotel-card-text"><strong>Dirección:</strong> {hotel.address}</p>
                        <p className="hotel-card-text"><strong>Teléfono:</strong> {hotel.phone}</p>
                        <p className="hotel-card-text-user">Email: {hotel.email}</p>
                        <p className="hotel-card-text-user">Calificacion: {hotel.assessment}</p>
                        <p className="hotel-card-text-user">Servicio: {hotel.service}</p>
                        <p className="hotel-card-text-user">Categoría: {hotel.category}</p>
                        <div className="star">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <div className="hotel-card-buttons d-flex justify-content-center">
                            
                            <button className="hotel-card-button  text-white rounded-pill px-3 py-2 ms-3">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}