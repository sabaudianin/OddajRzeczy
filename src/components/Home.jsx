import React from 'react';
import HomeHeader from "./header/HomeHeader.jsx";
import HeaderNav from "./header/HeaderNav.jsx";
import Three_columns from "./main_sections/Three_columns.jsx";
import SimpleSteps from "./main_sections/SimpleSteps.jsx";

const Home = () => {
    return (
        <>
            <HeaderNav/>
            <HomeHeader/>
            <Three_columns/>
            <SimpleSteps/>
        </>
    );
};

export default Home;