import React, { useState } from 'react';
import Header from './components/Header'; // Header
import Banner from './components/Banner'; // Banner
import ContactForm from './components/ContactForm'; // ContactForm
import ContentColumns from './components/ContentColumns'; // ContactForm
import Footer from './components/Footer'; // Footer

// Componentes de la tienda
import ProductList from './components/ProductList'; // ProductList
import Cart from './components/Cart'; // Cart 

const App = () => {
    // Validación de en que pagina nos encontramos: Tienda
    const [isStorePage, setIsStorePage] = useState(false);

    // Estado para guardos los items en el carrito
    const [cartItems, setCartItems] = useState([]);

    // Funcion que añade elementos al carrito
    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    }

    // Funcion que añade elementos al carrito
    const handleRemoveToCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    }

    // Validador para moverme de pagina en pagina
    const handleNavigateToStore = () => {
        setIsStorePage(true); // Ir a tienda
    }

    const handleNavigateToHome = () => {
        setIsStorePage(false); // Ir a pagina principal
    }

    return (
        <>
            <Header onNavigateToStore={handleNavigateToStore} onNavigateToHome={handleNavigateToHome} cartCount={cartItems.length} />
            <main>
                {isStorePage ?(
                    <>
                        <ProductList onAddToCart={handleAddToCart} />
                        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveToCart} />
                    </>
                ) : (
                    <>
                        <Banner/>
                        <ContactForm/>
                        <ContentColumns/>
                    </>
                )}
            </main>
            <Footer/>
        </>
    );
};

export default App;