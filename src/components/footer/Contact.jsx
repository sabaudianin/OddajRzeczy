import React from 'react';
import Decor from "../main_sections/Decor.jsx";
import FooterForm from "./FooterForm.jsx";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";


const Contact = () => {
    return (
        <section id="contact">
            <div className="relative w-full">
                <div
                    className="absolute inset-0 bg-[url('src/assets/Background-Contact-Form.jpg')] bg-cover bg-center opacity-25"></div>
                <div className="relative flex justify-end h-full">
                    <div className="w-full lg:w-2/5 h-full flex flex-col items-center mt-20">
                        <Decor text="Skontaktuj się z nami"/>
                        <FooterForm/>
                    </div>
                </div>
                <footer className="flex justify-between items-center w-full mt-40 mb-6">
                    <p className="mx-auto">Copyright Raf Bob</p>
                    <div className="flex space-x-5">
                        <img src={Facebook} alt="facebook" className="w-6 h-6"/>
                        <img src={Instagram} alt="instagram" className="w-6 h-6"/>
                    </div>
                </footer>
            </div>
        </section>
    )
};

export default Contact;