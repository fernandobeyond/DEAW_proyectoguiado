import React from 'react';
import Header from './components/Header'; // Header
import Banner from './components/Banner'; // Banner
import ContactForm from './components/ContactForm'; // ContactForm
import ContentColumns from './components/ContentColumns'; // ContactForm
import Footer from './components/Footer'; // Footer

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Banner/>
                
                <ContactForm/>
                <ContentColumns/>
                
            </main>
            <Footer/>
        </>
    );
};

export default App;

// ContentColumns