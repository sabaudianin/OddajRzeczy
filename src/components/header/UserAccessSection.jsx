import React from 'react';
import {Link} from 'react-router-dom';

const UserAccessSection = () => {
    return (
        <section className="relative">
            <div className="absolute top-5 z-10 right-5 justify-end flex gap-x-3  ">
                <Link to="/login"
                      className=" border-2 border-transparent hover:border-accent text-light">
                    Zaloguj
                </Link>
                <Link to="/login"
                      className="border-2 border-transparent hover:border-accent text-light">
                    Załóż konto
                </Link>
            </div>
        </section>
    );
};

export default UserAccessSection;