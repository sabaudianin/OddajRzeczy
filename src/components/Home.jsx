import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {scroller} from 'react-scroll';


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


const Home = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/login') {
            setShowLogin(true);
            setShowSignUp(false);
        } else if (location.pathname === '/signUp') {
            setShowLogin(false);
            setShowSignUp(true);
        } else {
            setShowLogin(false);
            setShowSignUp(false);
        }
    }, [location]);

    useEffect(() => {
        console.log(location.state)
        const target = location.state?.target;
        console.log(target);
        if (!showLogin && !showSignUp && target) {
            scroller.scrollTo(target, {
                duration: 500,
                smooth: true,
                offset: -100
            });
            console.log(`Scrolling to ${target}`);
        }
    }, [location.state, showLogin, showSignUp]);


    return (
        <>
            <UserAccessSection/>
            <HeaderNav/>
            {showLogin && (
                <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
            )}
            {showSignUp && (
                <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
            )}
            {!showLogin && !showSignUp && (
                <>
                    <StartCTA/>
                    <Three_columns/>
                    <SimpleSteps/>
                    <About/>
                    <WhoWeHelp/>
                    <Contact/>
                </>
            )}
        </>
    )
};


export default Home;