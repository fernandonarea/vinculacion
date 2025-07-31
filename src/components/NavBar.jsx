import { Link } from "react-router-dom";
import "../assets/styles/NavBar.css"

const NavBar = () => {

    return(
        <div className="nav-bar-container">
            <div className="nav-bar-items-container">
                <div className="navbar-item-home">
                    <Link to="/">
                        <h4 className="item">Inicio</h4>
                    </Link>
                </div>
                
                <div className="navbar-item-estudiante">
                    <Link to="/Estudiante">
                        <h4 className="item">Estudiante</h4>
                    </Link>
                </div>
                
                <div className="navbar-item-datos">
                    <Link to="/Datos">
                        <h4 className="item">Empleabilidad</h4>
                    </Link>
                </div>
                
                <div className="navbar-item-profesores">
                    <Link to="/Profesores">
                        <h4 className="item">Profesores</h4>
                    </Link>
                </div>
                
                <div className="navbar-item-contacto">
                    <Link to="/Contacto">
                        <h4 className="item">Contacto</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;