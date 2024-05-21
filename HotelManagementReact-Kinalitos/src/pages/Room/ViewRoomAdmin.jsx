import './ViewRoom.css';

export const ViewRoomAdmin = () => {
  return (
    <>
      <div className='all-content'>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container">
            <a className="navbar-brand" id="logo">
              <span>O</span>lasis
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar">
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <a className="nav-link" href="#book">Reserva</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#packages">Ofertas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Beneficios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallary">Populares</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Conoce Sobre Nosotros</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className='title-page'>Habitación.</h1>
        <div className="container">
          <div className="left-panel">
            <h2>Nombre de habitación</h2>
            <img src="https://via.placeholder.com/300" alt="Imagen de habitación" />
            <h3>Capacidad:</h3>
            <p>2 adultos, 1 niño</p>
            <h3>Tipo:</h3>
            <p>Habitación familiar</p>
            <h3>Descripción:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id dolo illum iure accusantium quibusdam quasi nesciunt soluta voluptates delectus distinctio, magni harum numquam accusamus nobis explicabo ab fugit! Quo.</p>
            <h3>Precio:</h3>
            <p>Q 5000.00</p>
          </div>
          <div className="right-panel">
            <h2>Habitación</h2>
            <label htmlFor="nombre">Nombre de habitación:</label>
            <input type="text" id="nombre" name="nombre" /><br /><br />
            <label htmlFor="descripcion">Descripción de habitación:</label>
            <textarea id="descripcion" name="descripcion"></textarea><br /><br />
            <label htmlFor="imagen">Imagen de habitación:</label>
            <input type="text" id="imagen" name="imagen" /><br /><br />
            <label htmlFor="capacidad">Capacidad de habitación:</label>
            <input type="text" id="capacidad" name="capacidad" /><br /><br />
            <label htmlFor="tipo">Tipo de habitación:</label>
            <input type="text" id="tipo" name="tipo" /><br /><br />
            <label htmlFor="precio">Precio de habitación:</label>
            <input type="text" id="precio" name="precio" /><br /><br />
            <div className="btn-container">
              <button>Agregar</button>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
