import React from 'react';
import {Link} from 'react-router-dom'

const CustomLink = ({to, children}) => {
    return (
        <>
            <Link
                to={to}
                className="border-2 border-transparent p-2 hover:border-accent text-light active:bg-accent cursor-pointer"
            >
                {children}
            </Link>
        </>
    );
};

export default CustomLink;