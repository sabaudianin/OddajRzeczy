import React from 'react';
import {NavLink} from 'react-router-dom'

const CustomNavLink = ({to, children}) => {
    return (
        <>
            <NavLink
                to={to}
                className="h-20 w-48 flex items-center justify-center border-2 border-dark  px-6 hover:bg-accent transition duration-200 font-bold text-center"
            >
                {children}
            </NavLink>
        </>
    );
};

export default CustomNavLink;