import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth";

export const NavBar = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate(); // Obtiene la función 'navigate' de React Router para cambiar de ruta dentro de la aplicación.

    const onLogout = () => {
        logout();
        navigate('/login', { // Redirige al usuario a la página de inicio de sesión ('/login') cuando se cierra sesión.
            replace: true // Reemplaza la entrada actual en el historial, evitando que el usuario pueda volver a la página anterior usando el botón de retroceso.
        })
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 mb-5">
            <div className="container-fluid">
                {/* Logo / Brand */}
                <Link className="navbar-brand" to="/">
                    <div>
                        <img className="img-logo" src="../logo.png" alt="logo" />
                    </div>
                </Link>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces del menú colapsable */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/action">
                                Action
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/adventure">
                                Adventure
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/fighting">
                                Fighting
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rpg">
                                RPG
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sport">
                                Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>

                    {/* Sección derecha con Logout */}
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">{user?.name}</span>
                        <button onClick={onLogout} className="nav-item nav-link btn">Logout</button>
                    </ul>
                </div>
            </div>
        </nav>


    )

}
