import React from 'react';

import CustomNavLink from "./CustomNavLink.jsx";
import Decor from "./Decor.jsx"
import CustomSection from "./CustomSection.jsx";
import {Outlet} from "react-router-dom";

const WhoWeHelp = () => {
    return (
        <CustomSection>
            <div id="whoWeHelp">
                <Decor text="Komu Pomagamy ? "/>
                <div
                    className="flex flex-col sm:flex-row items-center justify-center py-4 space-y-2 sm:space-y-0 sm:space-x-4">
                    <CustomNavLink to='/whowehelp/fundations'>
                        Fundacjom
                    </CustomNavLink>
                    <CustomNavLink to='/whowehelp/organizations'>
                        Organizacjom pozarządowym
                    </CustomNavLink>
                    <CustomNavLink to='/whowehelp/lokals'>
                        Lokalnym zbiórkom
                    </CustomNavLink>
                </div>
                <p className=" text-xl pt-8 bg-primary">W naszej bazie znajdziesz listę zweryfikowanych Fundacjii,
                    Organizacji
                    pozarządowych i lokalnych zbiórek z którymi
                    współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className=" bg-primary">
                <Outlet/>
            </div>
        </CustomSection>
    );
};

export default WhoWeHelp;