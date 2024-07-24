import React from 'react';

const CustomSection = ({children}) => {
    return (
        <section className="py-10">
            {children}
        </section>
    );
};

export default CustomSection;