import React from "react";
import './NavBar.css';

export default function NavBar() {
    return (  
    <ul>
        <li><a class="active" href="#home">Inicio</a></li>
        <li><a href="#Productos">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#about">Compañía</a></li>
    </ul>
    )
}