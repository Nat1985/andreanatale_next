"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import Avatar from './Avatar';

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
        <div className="md:h-[60vh] lg:h-[80vh] flex flex-col mx-16 md:mt-16 lg:mt-32 pb-16 mt:pb-0">
            <h5 className='mb-[-16px]'>Hello, I'm Andrea Natale</h5>
            <div className="flex gap-2 md:gap-8 items-center">
                <h1 className='hidden lg:block font-medium'> Creative</h1>
                <h2 className='hidden md:block lg:hidden font-medium'>Creative</h2>
                <h3 className='md:hidden font-medium'>Creative</h3>
                <Avatar />
            </div>
            <h1 className='hidden lg:block font-medium'>- Developer</h1>
            <h2 className='hidden md:block lg:hidden font-medium'>- Developer</h2>
            <h3 className='md:hidden font-medium'>- Developer</h3>
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
                                    <span key={index} className='text-[#DEBEBE]'>{element}</span>
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
