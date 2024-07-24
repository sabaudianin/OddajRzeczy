import React from 'react';
import People from '../../assets/People.jpg';
import Decoration from '../../assets/Decoration.svg';
import Signature from '../../assets/Signature.svg';

const About = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between  bg-primary">
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 flex flex-col justify-center py-8">
                <h2 className="text-3xl font-bold mb-4">O Nas</h2>
                <img src={Decoration} alt="decor" className="mx-auto py-6"/>
                <p className="text-xl m-4 ">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <p className="text-sm h-2/5 flex justify-end ">
                    <img src={Signature} alt="Signature" className=" p-6"/>
                </p>
            </div>
            <div className="lg:w-1/2 h-full ">
                <img src={People} alt="Sample" className="w-full h-auto "/>
            </div>
        </section>
    );
};

export default About;