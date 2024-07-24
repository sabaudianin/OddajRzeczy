import React from 'react';
import About from "./main_sections/About.jsx";
import HeaderNav from "./header/HeaderNav.jsx";
import Three_columns from "./main_sections/Three_columns.jsx";
import SimpleSteps from "./main_sections/SimpleSteps.jsx";
import WhoWeHelp from "./main_sections/WhoWeHelp.jsx";

const Home = () => {
    return (
        <>
            <HeaderNav/>
            <Three_columns/>
            <SimpleSteps/>
            <About/>
            <WhoWeHelp/>
        </>
    );
};

export default Home;