import React from 'react';


const ThreeColumns = () => {
    return (
        <div>
            <section
                className="bg-[url('../assets/3 Columns Background.png')] bg-cover bg-center "
                style={{
                    backgroundImage: "url('src/assets/3 Columns Background.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mx-auto  px-6 py-20  ">
                    <div
                        className="flex flex-col gap-20 lg:flex-row *:flex *:flex-col *:items-center *:gap-y-6 *:text-center lg:*:max-w-[49.5rem] lg:*:mx-auto">
                        <div>
                            <span className='text-7xl text-black'>10</span>
                            <h3 className='text-lg font-semibold'>ODEBRANYCH WORKÓW</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                        </div>
                        <div>
                            <span className='text-7xl text-black'>5</span>
                            <h3 className='text-lg font-semibold'>WSPARTYCH ORGANIZACJI</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                        </div>
                        <div>
                            <span className='text-7xl text-black'>7</span>
                            <h3 className='text-lg font-semibold'>ZORGANIZOWANYCH ZBIÓREK</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nemo!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThreeColumns;