import React from 'react';
import GooeyNav from '../Components/GooeyNav';
import img12 from '../Images/img12.png';

const HeroPage = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "Skills", href: "#skills" },
        { label: "Project", href: "#Projects" },
        { label: "Contact", href: "#Contacts" },
    ];

    return (
        <div className='w-full relative z-10'>
            <div className='top-0 left-0 right-0 w-full fixed flex justify-center z-100'>
                <div className='w-full max-w-7xl px-6 py-4 flex justify-between items-center'>

                    <div className='flex-1 flex justify-center'>
                        <GooeyNav
                            items={items}
                            particleCount={15}
                            particleDistances={[5, 5]}
                            particleR={100}
                            initialActiveIndex={0}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />
                    </div>
                    <div className='w-[100px] h-[100px] flex justify-center items-center'>
                        <img src="/logo-right.png" alt="Logo Right" className='w-full h-auto object-contain' />
                    </div>
                </div>
            </div>

            <section className='w-full flex flex-col md:flex-row items-center justify-between px-10 pt-[150px] max-w-7xl mx-auto'>

                <div className='w-full md:w-1/2 text-white'>
                    <h1 className='text-5xl font-bold mb-4'>
                        Suman <span className='text-red-600'>Kumar</span>
                    </h1>
                    <h3 className='text-2xl font-medium mb-4'>
                        Passionate MERN Stack Developer
                    </h3>
                    <p className='text-lg mb-6 text-gray-300'>
                        I specialize in building fast, responsive, and scalable web applications using the latest technologies. With a strong foundation in full-stack development, I transform ideas into real-world digital experiences.
                    </p>

                    <a
                        href='#Contacts'
                        className='inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition'
                    >
                        Let's Work Together
                    </a>
                </div>

                <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'>
                    <img
                        src={img12}
                        alt="Hero"
                        className='w-[300px] md:w-[400px] object-contain opacity-90 rounded-xl shadow-lg transition-opacity duration-300 hover:opacity-100'
                    />
                </div>
            </section>

        </div>
    );
};

export default HeroPage;
