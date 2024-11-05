import useMainStore from '@/app/zustand/mainStore.js';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Menu({ yPosition, isOpen }) {
    const router = useRouter();
    const links = [
        {
            label: "HOME",
            link: "/"
        },
        /* {
            label: "ABOUT",
            link: "/about"
        }, */
        {
            label: "BLOG",
            link: "/blog"
        },
        {
            label: "PORTFOLIO",
            link: "/portfolio"
        },
        {
            label: 'VIDEOGAMES',
            link: '/videogames'
        },
        {
            label: "CONTATTI",
            link: "/contact"
        }
    ]
    const { setBurger } = useMainStore();
    const handleClick = (event) => {
        const { id } = event.target;
        setBurger(false);
        router.push(id);
    }
    return (
        <div className={`bg-white w-full flex flex-col items-center md:flex-row justify-evenly lg:justify-center lg:gap-8 p-2 ${yPosition < 80 && 'rounded-b'} md:rounded-none ${!isOpen && 'hidden md:flex'}`}>
            {
                links.length > 0 && links.map((element, index) => (
                    <div key={index} className='text-indigo-800 hover:text-pink-500 font-bold cursor-pointer' id={element.link} onClick={handleClick}>{element.label}</div>
                ))
            }
        </div>
    )
}

export default Menu
