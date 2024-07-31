import React from 'react';
import {Link} from 'react-router-dom';
import CustomLink from "../accounts/CustomLink.jsx";

const UserAccessSection = () => {
    return (
        <section className="relative ">
            <div className="absolute top-5 z-10 right-5 justify-end flex gap-x-3  ">
                <CustomLink to="/login"
                            className=" border-2 border-transparent hover:border-accent text-light">
                    Zaloguj
                </CustomLink>
                <CustomLink to="/signUp">
                    Załóż konto
                </CustomLink>
            </div>
        </section>
    );
};

export default UserAccessSection;