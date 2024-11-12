import React from 'react'
import WorkCard from './WorkCard'

function Works() {
    const cardData = [
        {
            image: "/images/works/vincanta.png",
            title: "Vincanta Wine Paper",
            summary: "Interactive wine list for managing products in stock.",
            text: "An interactive wine list created for a restaurant client who needed an application to manage products in their cellar and present them to customers at the table using their tablet.",
            type: "Web application"
        },
        {
            image: "/images/works/tattooswap.png",
            title: "Tattooswap",
            summary: "Used product exchange marketplace.",
            text: "Tattooswap is a marketplace for buying and selling used tattoo equipment, filling a gap in services related to recycling within the tattoo industry.",
            type: "Marketplace"
        },
        {
            image: "/images/works/borgadesign.png",
            title: "Borga Design",
            summary: "Elegant and minimalist showcase website.",
            text: "The client requested a showcase website with simple, smooth animations that, along with a minimalist design, would highlight the elegance of the marble manufacturing company.",
            type: "Web site"
        },
        {
            image: "/images/works/ticinowild.jpg",
            title: "Ticino Wild",
            summary: "Experience purchasing marketplace.",
            text: "Platform for purchasing outdoor experience packages by users. The client (admin) requested an onboarding process for companies offering experience services and the ability to resell packages on this geolocated platform in the Ticino area.",
            type: "E-commerce"
        },
    ]
    return (
        <div className='w-full p-8 pt-16 bg-cyan-100'>
            <h3 className='mb-32 text-center'>Some last works...</h3>
            <div className='flex flex-col gap-16 md:gap-32 lg:gap-64'>
                {
                    cardData && cardData.map((element, index) => (
                        <WorkCard key={index} data={element} />
                    ))
                }
            </div>
        </div>
    )
}

export default Works
