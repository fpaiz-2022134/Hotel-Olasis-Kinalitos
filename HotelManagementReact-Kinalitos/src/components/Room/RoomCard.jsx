

import { Link } from "react-router-dom";

import { useState } from "react";

import './RoomCard.css'



export const RoomCard = ({ rooms = [] }) => {

    const [room, setRoom] = useState(

        {
            id: '',
            number: '',
            description: '',
            capacity: '',
            type: '',
            status: '',
            hotelid: ''
        }


    )


    return (
        <div className="room-list">
            {rooms.map((room) => (
                <div key={room.id} className="room-card card text-center">
                    <div className="card-header">
                        <h5 className="room-card-title">{room.number}</h5>
                    </div>
                    <div className="card-body">
                        <p className="room-card-text"><strong>Descripción:</strong> {room.description}</p>
                        <p className="room-card-text"><strong>Capacidad:</strong> {room.capacity}</p>
                        <p className="room-card-text"><strong>Tipo de habitación:</strong> {room.type}</p>
                        <p className="room-card-text-user">Precio: {room.price}</p>
                        <div className="star">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                        </div>
                        <div className="room-card-buttons d-flex justify-content-center">
                            <div className="room-card-button bg-primary text-white rounded-pill px-3 py-2 me-3">
                                {room.status}
                            </div>
                            {/* <div className="room-card-button bg-secondary text-white rounded-pill px-3 py-2">
                                <p className="m-0">{room.hotelid.name}</p>
                            </div> */}
                            <button className="room-card-button bg-danger text-white rounded-pill px-3 py-2 ms-3">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


/*
<div key={room.id} className="col-md-4 py-3 py-md-0">
                <div className="card">

                  <div className="card-body">
                    <h3>{room.number}</h3>
                    <p>
                      {room.description}
                    </p>
                    <p className="room-card-text">Capacidad: {room.capacity}</p>
                    <p className="room-card-text">Tipo de habitación: {room.type}</p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Precio: {room.price}</strong>
                      Estado: {room.status}</strong>
                    </h6>
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
            </div>

*/
