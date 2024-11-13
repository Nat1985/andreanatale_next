"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Mobile from './menu/Mobile'
import Desktop from './menu/Desktop'
import useScrollPosition from '@/app/hooks/useScrollPosition'
import gsap from 'gsap'

function Navbar() {
    const menuList = [
        {
            label: 'Works',
            link: '/works'
        },
        {
            label: 'Blog',
            link: '/blog'
        },
        {
            label: 'Videogames',
            link: '/videogames'
        },
        {
            label: 'Contact',
            link: '/contact'
        },
    ]

    // Gestisco animazione navbar
    const navbarRef = useRef();
    const scrollPosition = useScrollPosition();
    const [isColored, setIsColored] = useState(false);

    // Funzione per attivare l'animazione con gsap, solo se il colore cambia
    const toggleNavbarColor = useCallback((shouldBeColored) => {
        gsap.to(navbarRef.current, {
            backgroundColor: shouldBeColored ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0)',
            duration: 0.4,
        });
    }, []);

    useEffect(() => {
        const shouldBeColored = scrollPosition >= 100;

        if (shouldBeColored !== isColored) {
            setIsColored(shouldBeColored);
            toggleNavbarColor(shouldBeColored); // Esegui animazione solo quando cambia
        }
    }, [scrollPosition, isColored, toggleNavbarColor]);

    return (
        <div ref={navbarRef} className='fixed h-[80px] p-4 w-full flex justify-between z-10'>
            <Logo />
            <Mobile menuList={menuList} />
            <Desktop menuList={menuList} />
        </div>
    )
}

export default Navbar
