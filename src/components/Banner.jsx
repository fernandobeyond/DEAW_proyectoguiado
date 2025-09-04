import React, { useState } from 'react';
import imgbanner from '../img/banner.jpg';

const Banner = () => {  
    return(
        <>
        <section className="hero" id="inicio">
            <img src={imgbanner} alt="Portada de Videojuegos"/>
            <div className="hero-text">
                <h2>Explora Mundos, Vive Aventuras.</h2>
                <p>Tu próxima gran partida comienza aquí.</p>
            </div>
        </section>
        </>
    );
};

export default Banner;