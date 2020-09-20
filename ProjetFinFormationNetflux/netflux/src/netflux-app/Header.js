import React, { Component } from "react"
import { Link } from "react-router-dom"
import Netflux from "./Netflux.png"

class Header extends Component {

    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg  bg-dark text-alert row">
                    
                    <a className="navbar-brand">
                            <Link to='/' className="nav-link "><img src={Netflux} alt="logo netflux"/></Link>
                    </a>
                    <ul className="navbar-nav mr-auto col-6">
                        <li className="nav-item">
                            <Link to='/Series' className="nav-link text-danger">Séries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Films' className="nav-link text-danger">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Nouveaute' className="nav-link text-danger">Nouveautés</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/MaListe' className="nav-link text-danger">Ma liste</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 col">
                        <input className="form-control mr-sm-2" type="search" placeholder="Rechercher"/>
                    </form>
                    
                    <span className="navbar-text text-danger col-2">
                        <Link to= '/Form' className="nav-link text-danger">Ajouter un film/une série</Link>
                    </span>
                    <span className="navbar-text text-danger col">
                        <Link to= '/Compte' className="nav-link text-danger">Mon Compte</Link>
                    </span>
                </nav>
            </header>
        )
    }
}

export default Header