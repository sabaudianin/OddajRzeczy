import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./Home.jsx";
import Login from "./accounts/Login.jsx";
import SignUp from "./accounts/SignUp.jsx";
import Logout from "./accounts/Logout.jsx";
import Fundations from "./main_sections/Fundations.jsx";
import Organizations from "./main_sections/Organizations.jsx";
import Lokals from "./main_sections/Lokals.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="/whowehelp">
                    <Route path="fundations" element={<Fundations/>}/>
                    <Route path="organization" element={<Organizations/>}/>
                    <Route path="lokals" element={<Lokals/>}/>
                </Route>

            </Route>
            <Route path="login" element={<Home/>}/>
            <Route path="signUp" element={<Home/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
    );
};

export default Router;