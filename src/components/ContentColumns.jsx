import React from 'react';
import videoSource from '../intro-video.mp4';

const ContentColumns = () => {
    return (
        <section className="content-columns" id="catalogo">
            <div className="video-container">
                <h4>Descubre lo Último en Gaming</h4>
                <video controls muted loop>
                    <source src={videoSource} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
            <div className="category-menu">
                <h4>Explora por Categoría</h4>
                <ul>
                    <li><a href="#accion-juegos">Juegos de Acción</a></li>
                    <li><a href="#aventura-juegos">Juegos de Aventura</a></li>
                    <li><a href="#rpg-juegos">Juegos RPG</a></li>
                    <li><a href="#estrategia-juegos">Juegos de Estrategia</a></li>
                    <li><a href="#deportes-juegos">Juegos de Deportes</a></li>
                    <li><a href="#simulacion-juegos">Juegos de Simulación</a></li>
                </ul>
            </div>
        </section>
    );
};

export default ContentColumns;