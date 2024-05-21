import React from "react";

import { Link } from "react-router-dom";

import { ClockLoader } from "react-spinners";
import { useEffect } from "react";
import { useGetRooms } from "../../shared/Hooks/Room/useGetRooms";
import { useGetHotels } from "../../shared/Hooks/Hotel/useGetHotels";

import "../HomePage/HomePage.css";
import aboutImg from "../../assets/about-img.png"
import book from "../../assets/book-img.png"
import valencia from "../../assets/Valencia.png"
import barcelo from "../../assets/Barcelo.png"
import luxor from "../../assets/Luxor.png"
import times from "../../assets/Times.png"
import flamingo from "../../assets/Flamingo.png"
import excalibur from "../../assets/Excalibur.png"
import popular1 from "../../assets/Popular1.png"
import popular2 from "../../assets/Popular2.png"
import popular4 from "../../assets/Popular4.png"
import popular5 from "../../assets/Popular5.png"
import popular6 from "../../assets/Popular6.png"
import { RoomCard } from "../../components/Room/RoomCard";
import { HotelCard } from "../../components/Hotel/HotelCard";

export const HomePage = () => {

    const { rooms, getRooms, isFetching: isFetchingRooms } = useGetRooms();
    const { hotels, getHotels, isFetching: isFetchingHotels } = useGetHotels();

    useEffect(() => {
        getRooms();
        getHotels();
    }, []);

    if (isFetchingRooms || isFetchingHotels) {
        return (
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <ClockLoader />
            </div>
        );
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

            <div className="all-content">


                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" id="logo">
                            <span>O</span>lasis
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mynavbar"
                        >
                            <span>
                                <i className="fa-solid fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#book">
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#packages">
                                        Hoteles
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#packages">
                                        Habitaciones
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">
                                        Beneficios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#gallary">
                                        Populares
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        Conoce Sobre Nosotros
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="home">
                    <div className="content">
                        <h5>Bienvenido a <span>O</span>lasis </h5>
                        <h1>
                            Visita <span className="changecontent"></span>
                        </h1>
                        <p>
                            Somos la mejor opción en ofertas de hoteles
                        </p>
                        <a href="#about">Conoce Más Sobre Nosotros</a>
                    </div>
                </div>
                <section className="book" id="book">
                    <div className="container">
                        <div className="main-text">
                            <h1>
                                <span>R</span>eserva <span>Y</span>a
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3 d-flex justify-content-between">
                                <div className="card">
                                    <img src={book} alt="" />
                                </div>
                                <div className="login-prompt">
                                    <p>Por favor, inicia sesión para realizar una reserva.</p>
                                    <Link to="/user/" className="btn btn-primary btn-lg justify-content-center" id="login-button">
                                        Iniciar sesión
                                    </Link>
                                </div>
                                {/* <div className="login-prompt">
                                    <button class="btn btn-primary btn-lg justify-content-center" id="login-button">Registrarme</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="packages" id="packages">
                    <div className="container">
                        <div className="hotels">
                            <div className="main-txt">
                                <h1>
                                    <span>Hoteles</span>
                                </h1>
                            </div>

                            <HotelCard hotels={hotels} />
                        </div>
                        <div className="rooms">
                            <div className="main-txt">
                                <h1>
                                    <span>Habitaciones</span>
                                </h1>
                            </div>

                            <RoomCard rooms={rooms} />
                        </div>

                    </div>
                </section>
                <section className="services" id="services">
                    <div className="container">
                        <div className="main-txt">
                            <h1>
                                <span>B</span>eneficios
                            </h1>
                        </div>
                        <div className="row" style={{ marginTop: 30 + 'px' }}>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-hotel"></i>
                                    <div className="card-body">
                                        <h3>Los mejores Hoteles</h3>
                                        <p>
                                            Trabajamos con los mejores hoteles alrededor del pais
                                            para mejor comodidad para nuestros huéspedes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-utensils"></i>
                                    <div className="card-body">
                                        <h3>Comidas & Bebidas</h3>
                                        <p>
                                            Cada reservacion de hotel cuenta con buffet incluido, como tambien bebidas incluidas en el bar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-bullhorn"></i>
                                    <div className="card-body">
                                        <h3>Plan de Seguridad</h3>
                                        <p>
                                            Contamos con vigilancia en todo el hotel por seguridad del húesped, comunicaciones
                                            con los huéspedes, equipo contra incendios, personal capacitado, acceso controlado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 30 + 'px' }}>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-globe-asia"></i>
                                    <div className="card-body">
                                        <h3>Alrededor del pais</h3>
                                        <p>
                                            Trabajamos con los mejores hoteles alrededor del pais, siempre pensando en
                                            la seguridad de nuestros huéspedes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-plane"></i>
                                    <div className="card-body">
                                        <h3>Viajes Seguros</h3>
                                        <p>
                                            Trabajamos con las mejores compañías aerolineas para darles el mejor servicio
                                            a nuestro huéspedes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <i className="fas fa-hiking"></i>
                                    <div className="card-body">
                                        <h3>Actividades</h3>
                                        <p>
                                            Contamos con actividades como jugar tenis, cata de vinos, natación, paseo al mirador,
                                            hacer ejercicio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gallary" id="gallary">
                    <div className="container">
                        <div className="main-txt">
                            <h1>
                                <span>Hoteles Mas</span> <span>Populares</span>
                            </h1>
                        </div>
                        <div className="row" style={{ marginTop: 30 + 'px' }}>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular1} alt="" height="230px" />
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular2} alt="" height="230px" />
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular1} alt="" height="230px" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 30 + 'px' }}>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular4} alt="" height="230px" />
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular5} alt="" height="230px" />
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card">
                                    <img src={popular6} alt="" height="230px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="container">
                        <div className="main-txt">
                            <h1>
                                <span>C</span>onoce <span>S</span>obre <span>N</span>osotros
                            </h1>
                        </div>
                        <div className="row" style={{ marginTop: 50 + 'px' }}>
                            <div className="col-md-6 py-3 py-md-0">
                                <div className="card">
                                    <img src={aboutImg} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 py-3 py-md-0 justify-content-center w">
                                <h2>¿Quienes Somos?</h2>
                                <p>
                                    Olasis es una empresa de hospitalidad dedicada a ofrecer servicios de alojamiento de primera clase a viajeros
                                    de todo el mundo. Trabajamos en colaboración con una amplia red de hoteles, resorts, posadas y otras formas de
                                    alojamiento temporal para garantizar que nuestros huéspedes disfruten de una experiencia única y satisfactoria
                                    en cada destino. Nuestro equipo está comprometido con la excelencia en el servicio, la atención al detalle y la
                                    creación de momentos inolvidables para cada persona que elige alojarse con nosotros. En Olasis, nos enorgullece
                                    no solo brindar un lugar donde hospedarse, sino crear recuerdos que perduren toda la vida.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <h1>
                        <span>O</span>lasis
                    </h1>


                </footer>
            </div>

        </>
    );
};