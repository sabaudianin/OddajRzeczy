import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Home from "./Home.jsx";
import Login from "./accounts/Login.jsx";
import SignUp from "./accounts/SignUp.jsx";
import Logout from "./accounts/Logout.jsx";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/logout" element={<Logout/>}/>

        </Routes>
    );
};

export default Router;