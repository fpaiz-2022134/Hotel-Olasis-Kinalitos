<<<<<<< HEAD
import { CategoryForm } from "../../components/Category/CategoryForm"
import { CategoryList } from "../../components/Category/CategoryList"
import { useState } from "react"
import './Category.css'

export const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null) 

    return (
        <>
        <div>
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
        </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <CategoryForm selectedCategory={selectedCategory} />
                </div>
                <div>
                    <CategoryList setSelectedCategory={setSelectedCategory} /> {/* Pasar setSelectedHotel como prop */}
                </div>
            </div>
        </>
    )
}
=======
import { Table } from "../../components/Category/Table.jsx";
import { Toaster } from "react-hot-toast"
import { useState } from "react"
import './Category.css';

export const Category = () => {
    const [isCategory, setCategory] = useState(false)
    const handleUsePage = () => {
        setIsCategory(prev => !prev)
    }
    
    return (
        <div className="container-main">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-div">
                        <br />
                        <h2><center>Categoría</center></h2>
                        <br />
                        <br />
                        <label>Categoría</label>
                        <select className="box" name="select">
                            <option value=""></option>
                            <option value="value1">Resort</option>
                            <option value="value2">Boutique</option>
                            <option value="value3">Lujo</option>
                            <option value="value4">Estándar</option>
                            <option value="value5">Budget</option>
                            <option value="value6">Upscale</option>
                            <option value="value7">All-inclusive</option>
                        </select>
                        <br />
                        <label>Nombre</label>
                        <input className="box" type="text" />
                        <br />
                        <label>Descripción</label>
                        <input className="box" type="text" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <button className="button">Agregar</button>
                        <button className="button1">Editar</button>
                        <button className="button2">Eliminar</button>


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-div">
                        <h2><center>Categoría</center></h2>
                        <br />
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
};
>>>>>>> 8e047cfebacae7d73fe289a8dabed787dc7fc2d5
