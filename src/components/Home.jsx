import React from 'react';
import About from "./main_sections/About.jsx";
import HeaderNav from "./header/HeaderNav.jsx";
import UserAccessSection from "./header/UserAccessSection.jsx";
import Three_columns from "./main_sections/Three_columns.jsx";
import SimpleSteps from "./main_sections/SimpleSteps.jsx";
import WhoWeHelp from "./main_sections/WhoWeHelp.jsx";
import Contact from "./footer/Contact.jsx";
import StartCTA from "./header/StartCTA.jsx";

const Home = () => {
    return (
        <>

            <UserAccessSection/>
            <HeaderNav/>
            <StartCTA/>
            <Three_columns/>
            <SimpleSteps/>
            <About/>
            <WhoWeHelp/>
            <Contact/>
        </>
    );
};

export default Home;