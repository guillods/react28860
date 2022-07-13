import React from "react";
import './NavBar.css';

export default function NavBar() {
    return (

            <header id="Inicio">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid d-flex justify-content-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <span class="nombre-tienda">ELEKTROGEEKS</span>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="categorias">Categorias</span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#">Audio</a></li>
                                    <li><a class="dropdown-item" href="#">Video</a></li>
                                    <li><a class="dropdown-item" href="#">Computación</a></li>
                                    <li><a class="dropdown-item" href="#">Videojuegos</a></li>
                                    <li><a class="dropdown-item" href="#">Otros</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </header>
            

    )
}