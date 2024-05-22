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
