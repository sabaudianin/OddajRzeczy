import React from 'react';
import Decoration from '../../assets/Decoration.svg';
import {NavLink, Outlet} from "react-router-dom";

const WhoWeHelp = () => {
    return (
        <section>
            <div>
                <h2 className="text-4xl pt-16">Komu pomagamy?</h2>
                <img src={Decoration} alt="decor" className="mx-auto pt-6"/>
                <div className="flex items-center justify-center py-16 space-x-4">
                    <NavLink to='fundations'
                             className="h-20 w-48 flex items-center justify-center border-2 border-dark py-4 px-6 hover:bg-accent transition duration-200 font-bold text-center">
                        Fundacjom
                    </NavLink>
                    <NavLink to="organization"
                             className="h-20 w-48 border-2 border-dark py-4 px-6 hover:bg-accent transition duration-200 font-bold text-center">
                        Organizacjom pozarządowym
                    </NavLink>
                    <NavLink to="lokals"
                             className="h-20 w-48 border-2 border-dark py-4 px-6 hover:bg-accent transition duration-200 font-bold text-center">
                        Lokalnym zbiórkom
                    </NavLink>
                </div>
                <p className="text-xl">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="p-16">
                <Outlet/>
            </div>
        </section>
    )
        ;
};

export default WhoWeHelp;