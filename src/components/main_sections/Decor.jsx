import React from 'react';
import Decoration from "../../assets/Decoration.svg";

const Decor = ({text}) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-semibold lg:text-4xl">
                {text}
            </h2>
            <img src={Decoration} alt="decor" className="mx-auto py-6"/>
        </div>
    );
};

export default Decor;