import React from 'react';

const HeaderNav = () => {
    return (
        <>
            <div className=" justify-end flex gap-x-3  ">
                <a href="#"
                   className=" border-2 border-transparent hover:border-accent text-black">
                    Zaloguj
                </a>
                <a href="#"
                   className="border-2 border-transparent hover:border-accent text-black">
                    Załóż konto
                </a>
            </div>


            <div>
                <header className='text-black font-serif'>
                    <nav className="mx-auto max-w-[52.5rem] p-6 lg:max-w-[78rem]">
                        <div className="relative flex items-center gap-x-4 justify-end">
                            <div className="flex items-center group peer lg:hidden">
                                <input type="checkbox" id="menu" className="hidden"/>
                                <label htmlFor="menu"
                                       className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg p-2 cursor-pointer">
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
                                className="absolute top-11 left-0 w-full hidden peer-has-[:checked]:flex flex-col gap-2 bg-white  border border-solid border-gray-100 dark:border-gray-900 shadow-md rounded-lg px-6 py-4 lg:relative lg:top-0 lg:left-0 lg:w-auto lg:flex lg:flex-row lg:border-none lg:p-0 lg:shadow-none *:flex *:items-center *:gap-x-1.5 *:py-1.5 *:text-sm *:text-gray-950  *:font-medium lg:*:px-2">

                                <a href="#"
                                   className=" box-border hover:border-b-2 hover:border-black">
                                    Start

                                </a>
                                <a className=" hover:border-b-2 hover:border-black" href="#">
                                    O co chodzi?
                                </a>
                                <a className=" hover:border-b-2 hover:border-black" href="#">
                                    O nas
                                </a>
                                <a className=" hover:border-b-2 hover:border-black" href="#">
                                    Funkcje i organizacje
                                </a>
                                <a className="hover:border-b-2 hover:border-black" href="#">
                                    Kontakt
                                </a>
                            </div>

                        </div>
                    </nav>
                </header>
            </div>


        </>

    );
};

export default HeaderNav;