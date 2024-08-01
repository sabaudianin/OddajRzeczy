import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import CustomLink from "./CustomLink.jsx";
import Decor from "../main_sections/Decor.jsx";


const Logout = ({showLogout, setShowLogout}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 3000);

        return () => clearTimeout(timer)
    }, [navigate]);


    return (
        <section className="flex items-center justify-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 mt-48">
                <Decor text="Wylogowano"/>
                <div>
                    <CustomLink to="/">
                        Strona Główna
                    </CustomLink>
                </div>
                <p className="p-8 color-light">Nastąpi automatyczne przekierowanie na stronę główną.</p>
            </div>
        </section>);
};

export default Logout;