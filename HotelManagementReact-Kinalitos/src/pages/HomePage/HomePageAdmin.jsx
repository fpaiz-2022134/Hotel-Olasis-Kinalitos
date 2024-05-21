import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from '../../assets/logo.png'

import "./HomePageAdmin.css"

export const HomePageAdmin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
                <div className="container">
                    <a className="navbar-brand" id="logo">
                        <span>O</span>lasis
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                        aria-controls="mynavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#book">
                                    Reserva
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#packages">
                                    Ofertas
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
        </>
    );
};