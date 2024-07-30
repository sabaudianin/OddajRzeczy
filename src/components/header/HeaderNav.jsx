import React, {useCallback} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import {useNavigate} from 'react-router-dom';


const HeaderNav = () => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => {
        navigate('/');
    }, [navigate]);


    return (

        <section className="relative">
            <header className='text-black font-serif absolute z-10 right-0 top-10'>
                <nav className="mx-auto p-6 ">
                    <div className="flex items-center gap-x-4 justify-end">
                        <div className="flex items-center group peer lg:hidden">
                            <input type="checkbox" id="menu" className="hidden"/>
                            <label htmlFor="menu"
                                   className="bg-light  hover:bg-accent  ring-1 ring-gray-200  rounded-lg p-2 cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 256 256"
                                     className="group-has-[input:checked]:hidden fill-gray-950 dark:fill-white">
                                    <path
                                        d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 256 256"
                                     className="hidden group-has-[input:checked]:block fill-gray-950 dark:fill-white">
                                    <path
                                        d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128 47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
                                </svg>
                            </label>
                        </div>

                        <div
                            className="absolute top-11 -left-500 w-[300px] hidden peer-has-[:checked]:flex flex-col gap-2 bg-white shadow-md rounded-lg px-6 py-4 lg:relative lg:top-0 lg:left-0 lg:w-auto lg:flex lg:flex-row lg:border-none lg:p-0 lg:shadow-none *:flex *:items-center *:gap-x-1.5 *:py-1.5 *:text-sm *:text-gray-950  *:font-medium lg:*:px-2">

                            <a
                                onClick={handleNavigate}
                                className="border-b-2 border-transparent box-border hover:border-b-2 hover:border-black">
                                Start

                            </a>
                            <Link
                                to="simpleSteps"
                                duration={500}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                className="border-b-2  border-transparent hover:border-b-2 hover:border-black"
                            >
                                O co chodzi?
                            </Link>
                            <Link
                                to="about"
                                duration={500}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                className="border-b-2  border-transparent hover:border-b-2 hover:border-black">
                                O nas
                            </Link>
                            <Link
                                to="whoWeHelp"
                                duration={500}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                className="border-b-2  border-transparent hover:border-b-2 hover:border-black"
                            >
                                Funkcje i organizacje
                            </Link>
                            <Link
                                to="contact"
                                duration={500}
                                smooth={true}
                                spy={true}
                                className="border-b-2 border-transparent hover:border-b-2 hover:border-black "
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </section>


    );
};

export default HeaderNav;