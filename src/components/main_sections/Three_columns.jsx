import React from 'react';


const ThreeColumns = () => {
    return (
        <section
            className="bg-[url('/3ColumnsBackground.png')] bg-cover bg-center"
        >
            <div className="mx-auto  px-6 py-20  ">
                <div className="flex flex-col gap-20 lg:flex-row ">
                    <div>
                        <span className='text-6xl text-black'>10</span>
                        <h3 className='text-lg font-semibold'>ODEBRANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                    </div>
                    <div>
                        <span className='text-6xl text-black'>5</span>
                        <h3 className='text-lg font-semibold'>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                    </div>
                    <div>
                        <span className='text-6xl text-black'>7</span>
                        <h3 className='text-lg font-semibold'>ZORGANIZOWANYCH ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ThreeColumns;