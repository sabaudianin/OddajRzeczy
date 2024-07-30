import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import About from "./main_sections/About.jsx";
import HeaderNav from "./header/HeaderNav.jsx";
import UserAccessSection from "./header/UserAccessSection.jsx";
import Three_columns from "./main_sections/Three_columns.jsx";
import SimpleSteps from "./main_sections/SimpleSteps.jsx";
import WhoWeHelp from "./main_sections/WhoWeHelp.jsx";
import Contact from "./footer/Contact.jsx";
import StartCTA from "./header/StartCTA.jsx";
import Login from "./accounts/Login.jsx";
import SignUp from "./accounts/SignUp.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/login') {
            setShowLogin(true);
        } else {
            setShowLogin(false);
        }
    }, [location]);

    useEffect(() => {
        if (location.pathname === '/signUp') {
            setShowSignUp(true);
        } else {
            setShowSignUp(false);
        }
    }, [location]);

    return (
        <>
            <UserAccessSection/>
            <HeaderNav/>
            {showLogin && (
                <Login
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}/>)
            }
            {showSignUp && (
                <SignUp
                    showSignUp={showSignUp}
                    setShowSignUp={setShowSignUp}/>)
            }
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