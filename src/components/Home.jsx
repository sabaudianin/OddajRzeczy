import React from 'react';
import About from "./main_sections/About.jsx";
import HeaderNav from "./header/HeaderNav.jsx";
import Three_columns from "./main_sections/Three_columns.jsx";
import SimpleSteps from "./main_sections/SimpleSteps.jsx";
import WhoWeHelp from "./main_sections/WhoWeHelp.jsx";
import Contact from "./footer/Contact.jsx";

const Home = () => {
    return (
        <>
            <HeaderNav/>
            <Three_columns/>
            <SimpleSteps/>
            <About/>
            <WhoWeHelp/>
            <Contact/>
        </>
    );
};

export default Home;