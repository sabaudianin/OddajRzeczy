import React from 'react';

import CustomNavLink from "./CustomNavLink.jsx";
import Decor from "./Decor.jsx"
import CustomSection from "./CustomSection.jsx";
import {Outlet} from "react-router-dom";

const WhoWeHelp = () => {
    return (
        <CustomSection>
            <div>
                <Decor text="Komu Pomagamy ? "/>
                <div className="flex items-center justify-center py-4 space-x-4">
                    <CustomNavLink to='fundations'>
                        Fundacjom
                    </CustomNavLink>
                    <CustomNavLink to="organization">
                        Organizacjom pozarządowym
                    </CustomNavLink>
                    <CustomNavLink to="lokals">
                        Lokalnym zbiórkom
                    </CustomNavLink>
                </div>
                <p className="text-xl pt-8 bg-primary">W naszej bazie znajdziesz listę zweryfikowanych Fundacjii,
                    Organizacji
                    pozarządowych i lokalnych zbiórek z którymi
                    współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="p-16 bg-primary">
                <Outlet/>
            </div>
        </CustomSection>
    );
};

export default WhoWeHelp;