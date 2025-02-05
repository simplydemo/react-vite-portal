// import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {

    // State to handle which card is hovered
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const navigate = useNavigate();
    const navigateTo = (path:string) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const toBusinessEnablement = (path:string) => {
        navigateTo(path);
    };



    const cards = [
        { id: 1, title: "Xclerate",  description: "We set ourselves apart in the business and management consulting industry by focusing on delivering actionable results rather than just extensive planning, while leveraging the deep expertise of our seasoned consultants.",path:'/xclerate' },
        { id: 2, title: "ITExS", description: "Our Technology Consulting services turn your business challenges into opportunities by offering expert guidance on leveraging technology to achieve your strategic goals." ,path:'/ITExS'},
        { id: 3, title: "BizExs",  description: "Our IT Excellence services verticle is dedicated to delivering a sophisticated portfolio of IT solutions, meticulously curated to empower businesses with cutting-edge technology and expert guidance.",path:'/businessenablement' },
        { id: 4, title: "XpertEaze",  description: "Our deep understanding of the industry enables us to impart innovative, insightful, and industry-relevant training programs to corporates, professionals, and IT career aspirants.",path:'/xperteaze' }
    ];

    return (
        <>
            <div className="bg-cover bg-fixed bg-[url('/src/assets/background.jpg')] h-auto md:px-24 py-18 p-8">
                <div>
                    <h2 className='flex text-base gap-2 text-white font-semibold items-center'>
                        Services
                    </h2>
                    <div className='flex justify-between items-center flex-wrap '>
                        <h1 className='md:text-[44px] text-[30px] text-white font-bold w-3/4'>
                            Services for organizations,<br/>
                            Professionals and IT aspirants
                        </h1>
                    </div>
                </div>

                <div className="flex justify-center gap-4 p-4 md:flex-nowrap flex-wrap w-full">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="relative w-72 h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:w-96 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-50" style={{ opacity: hoveredCard === card.id ? '1' : '0.7' }} />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent">
                                <h3 className="text-white text-lg mb-2 bg-[#CD9D20AD] h-[50px] flex items-center justify-center rounded-lg text-[24px] font-semibold" style={{ opacity: hoveredCard === card.id ? '0' : '1' }}>{card.title}</h3>
                                <div className="text-white text-sm transition-opacity duration-300 ease-in-out bg-[#CD9D20AD] rounded-lg p-[24px]" style={{ display: hoveredCard === card.id ? 'block' : 'none' }} onClick={()=>toBusinessEnablement(card.path)}>
                                    <h1 className="text-white text-lg mb-2 h-[50px] flex items-center justify-center rounded-lg font-semibold">{card.title}</h1>

                                    <p className='leading-relaxed'>{card.description}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;