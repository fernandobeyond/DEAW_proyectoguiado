import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        celular: '',
        categoria: '',
        presupuesto: ''
    });

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let messages = [];

        // Validaciones reescritas para React
        if (formData.nombre.trim() === '') {
            isValid = false;
            messages.push('El nombre completo es obligatorio.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.correo.trim())) {
            isValid = false;
            messages.push('Por favor, ingresa un correo electrónico válido.');
        }

        const phoneNumber = formData.celular.replace(/\D/g, '');
        if (phoneNumber.length < 9) {
            isValid = false;
            messages.push('El número celular debe tener al menos 9 dígitos.');
        }

        const presupuesto = parseFloat(formData.presupuesto);
        if (isNaN(presupuesto) || presupuesto < 100) {
            isValid = false;
            messages.push('El presupuesto máximo debe ser de al menos 100 soles.');
        }

        if (isValid) {
            setIsError(false);
            setMessage('¡Formulario enviado con éxito! Te contactaremos pronto.');
            setFormData({
                nombre: '',
                correo: '',
                celular: '',
                categoria: '',
                presupuesto: ''
            });
        } else {
            setIsError(true);
            setMessage(messages.join('<br>'));
        }
    };

    return (
        <section className="contact-form-section" id="contacto">
            <h3>Contáctanos para tu Próximo Juego</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                <label htmlFor="correo">Correo de Contacto:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

                <label htmlFor="celular">Número Celular:</label>
                <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} />

                <label htmlFor="categoria">Categoría de Juego:</label>
                <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
                    <option value="">Selecciona una categoría</option>
                    <option value="accion">Acción</option>
                    <option value="aventura">Aventura</option>
                    <option value="rpg">RPG</option>
                    <option value="estrategia">Estrategia</option>
                    <option value="deportes">Deportes</option>
                    <option value="simulacion">Simulación</option>
                </select>

                <label htmlFor="presupuesto">Presupuesto Máximo:</label>
                <input type="number" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange} min="0" step="10" placeholder="Ej: 100" />

                <button type="submit">Enviar Consulta</button>
            </form>
            <p className="form-message" dangerouslySetInnerHTML={{ __html: message }} style={{ color: isError ? 'red' : 'green' }}></p>
        </section>
    );
};

export default ContactForm;