import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;