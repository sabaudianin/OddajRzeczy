import React from 'react';
import Decor from "../main_sections/Decor.jsx";
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"


const Contact = () => {
    return (
        <section id="contact">
            <div className="relative w-full">
                <div
                    className="absolute inset-0 bg-[url('src/assets/Background-Contact-Form.jpg')] bg-cover bg-center opacity-25"></div>
                <div className="relative flex justify-end h-full">
                    <div className="w-full lg:w-2/5 h-full flex flex-col items-center mt-20">
                        <Decor text="Skontaktuj się z nami"/>
                        <form className="w-full flex flex-col items-center">
                            <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
                                <label className="w-full lg:w-1/2 text-left font-bold">
                                    Wpisz swoje Imie
                                    <input
                                        type="text"
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-base peer"
                                        placeholder=" "
                                    />
                                </label>
                                <label className="w-full lg:w-1/2 text-left font-bold">
                                    Wpisz swoj email
                                    <input
                                        type="text"
                                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-base peer"
                                        placeholder=" "
                                    />
                                </label>
                            </div>
                            <label className="w-full mt-4 text-left font-bold">
                                Wpisz swoja wiadomosc
                                <textarea
                                    rows={4}
                                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-base peer"
                                ></textarea>
                            </label>
                            <div className="w-full flex justify-end">
                                <input
                                    type="submit"
                                    value="Wyślij"
                                    className="mt-4 px-10 py-4 rounded flex items-center justify-center border-2 border-dark hover:bg-accent transition duration-200 font-bold text-center"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="flex justify-between items-center w-full mt-40">
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