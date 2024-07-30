import React, {useState} from 'react';
import CustomLink from "./CustomLink.jsx";
import Decor from "../main_sections/Decor.jsx";


const Logout = () => {


    return (
        <section className="flex items-center justify-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 mt-24">
                <Decor text="Wylogowano"/>
                <div>
                    <CustomLink to="/">
                        Strona Główna
                    </CustomLink>
                </div>
            </div>
        </section>);
};

export default Logout;