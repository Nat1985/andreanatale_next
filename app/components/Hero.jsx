"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap';

function Hero() {
    const whatList = [
        'web applications',
        'management platforms',
        'web sites',
        'e-commerce',
        'marketplace',
        'videogames'
    ];
    const howList = [
        'seamless',
        'elegant',
        'user-friendly',
        'minimal'
    ]

    const scrollRef = useRef();
    const scrollIntervalRef = useRef();

    useEffect(() => {
        const scrollElement = scrollRef.current;
        const elementHeight = scrollElement.clientHeight;

        let currentIndex = 0;

        scrollIntervalRef.current = setInterval(() => {
            currentIndex = (currentIndex + 1) % whatList.length;
            gsap.to(scrollElement, {
                scrollTop: currentIndex * elementHeight + 1, // Offset di 1 pixel in alto
                duration: 1.5, // Durata dell’animazione, più alto per più lentezza
                ease: "power3.inOut" // Puoi cambiare ease per un'animazione più morbida
            });
        }, 2500); // Cambia ogni 2,5 secondi per sincronizzare l'animazione più lenta

        return () => clearInterval(scrollIntervalRef.current);
    }, []);
    return (
        <div className="flex flex-col mx-16 items-center">
            <div className='mb-[-16px]'>Hello, I'm Andrea Natale</div>
            <div className="flex gap-2 md:gap-8 items-center">
                <h1 className='hidden md:block'> Creative</h1>
                <h2 className='md:hidden'>Creative</h2>
                <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden relative">
                    <Image
                        src="/images/io.png"
                        alt="Andrea Natale"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <h1 className='hidden md:block'>developer</h1>
            <h2 className='md:hidden'>developer</h2>
            <div className='mt-16 md:mt-4 flex flex-col gap-32'>
                <div className="flex md:flex-row items-center text-xl md:text-4xl gap-2">
                    <div>
                        {/* Building custom web applications with seamless, user-friendly interfaces. */}
                        I build
                    </div>
                    <div ref={scrollRef} className='h-[28px] md:h-[40px] overflow-hidden no-scrollbar'>
                        <div className='flex flex-col'>
                            {
                                whatList.map((element, index) => (
                                    <span key={index} className='text-[#EC4899]'>{element}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='self-center'><div className='mouse'></div></div>
            </div>
        </div>
    )
}

export default Hero