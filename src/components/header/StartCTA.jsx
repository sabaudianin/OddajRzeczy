import React from 'react';
import Decor from "../main_sections/Decor.jsx";
import {Link} from "react-router-dom";


const StartCTA = () => {
    return (
        <section id="start" className="flex flex-col lg:flex-row bg-white h-auto lg:h-[700px]">
            <div
                className="w-full lg:w-1/2 bg-[url('src/assets/Home-Hero-Image.jpg')] bg-cover bg-no-repeat bg-right h-[300px] lg:h-[700px]"></div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-0">
                <Decor text="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"/>
                <div className="flex justify-center gap-4 mt-10">
                    <Link to="/login"
                          className="uppercase border-2 border-dark p-5 hover:bg-accent transition duration-200 font-bold">
                        Oddaj Rzeczy
                    </Link>
                    <Link to="/login"
                          className=" uppercase border-2 border-dark p-5 hover:bg-accent transition duration-200 font-bold">
                        Zorganizuj Zbiórkę
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StartCTA;