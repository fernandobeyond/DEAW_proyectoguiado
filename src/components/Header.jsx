import React, { useState } from 'react';
// Instalar: npm install react-router-dom
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
// Instalar: npm install @heroicons/react
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; 
import './css/Header.css';

const Header = ({ onNavigateToStore, onNavigateToHome, cartCount }) => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    
    const handleToggleMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    return(
        <>
        <header className="main-header">
            <div className="logo">
                <img src={logo} alt="GameVerse Logo"/>
                <h1>GameVerse</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#" onClick={onNavigateToHome}>Inicio</a></li>
                    <li><a href="#" onClick={onNavigateToStore}>Catálogo</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className="cart-icon-container" onClick={onNavigateToStore}>
                <ShoppingCartIcon className="cart-icon" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <button className="menu-toggle" aria-label="Abrir menú" onClick={handleToggleMenu}>☰</button>
        </header>

        <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
            <nav onClick={handleToggleMenu}>
                <ul>
                    <li><a href="#" onClick={onNavigateToHome}>Inicio</a></li>
                    <li><a href="#" onClick={onNavigateToStore}>Catálogo</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </aside>
        </>
    );
};

export default Header;