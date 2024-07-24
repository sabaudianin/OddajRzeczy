import React from 'react';
import {Link} from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';
import Icon1 from '../../assets/Icon1.svg';
import Icon2 from '../../assets/Icon2.svg';
import Icon3 from '../../assets/Icon3.svg';
import Icon4 from '../../assets/Icon4.svg';

const SimpleSteps = () => {
    return (

        <section>
            <div className="flex flex-col items-center mx-auto pt-16  ">
                <div className="mx-auto text-center mb-6">
                    <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
                        Wystarczą 4 proste kroki
                    </h2>
                    <img src={Decoration} alt="decor" className="mx-auto "/>
                </div>

                <div
                    className="w-full grid mx-auto gap-12 bg-lightes py-16 *:w-full *:col-span-1 *:text-center md:grid-cols-2 xl:grid-cols-4">
                    <div>
                        <img src={Icon1} alt="tShirt" className="mx-auto"/>
                        <h4 className="mt-4 mb-2  text-lg font-bold lg:text-xl">
                            Wybierz rzeczy
                        </h4>
                        <div className="custom-hr my-4"></div>
                        <p>
                            Ubrania, zabawki, sprzęt i inne
                        </p>
                    </div>

                    <div>
                        <img src={Icon2} alt="" className="mx-auto"/>
                        <h4 className="mt-4 mb-2  text-lg font-bold lg:text-xl">
                            Spakuj je
                        </h4>
                        <div className="custom-hr my-4"></div>
                        <p>
                            Skorzystaj z worków na śmieci
                        </p>
                    </div>

                    <div>
                        <img src={Icon3} alt="" className="mx-auto"/>
                        <h4 className="mt-4 mb-2  text-lg font-bold lg:text-xl">
                            Zdecyduj komu chcesz pomóc
                        </h4>
                        <div className="custom-hr my-4"></div>
                        <p>
                            Wybierz zaufane miejsce
                        </p>
                    </div>

                    <div>
                        <img src={Icon4} alt="" className="mx-auto"/>
                        <h4 className="mt-4 mb-2  text-lg font-bold lg:text-xl">
                            Zamów kuriera
                        </h4>
                        <div className="custom-hr my-4"></div>
                        <p className="mr-2">
                            Kurier przyjedzie w dogodnym terminie
                        </p>
                    </div>

                </div>
                <Link to="/login"
                      className="border-2 border-dark p-5 mt-10 hover:bg-accent transition duration-200 font-bold">
                    Oddaj Rzeczy
                </Link>
            </div>
        </section>

    );
};

export default SimpleSteps;