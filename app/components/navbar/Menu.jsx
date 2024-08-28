import Link from 'next/link'
import React from 'react'

function Menu({ yPosition, isOpen }) {
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
            label: "CONTATTI",
            link: "/contact"
        }
    ]
    return (
        <div className={`bg-white w-full flex justify-evenly lg:justify-start gap-2 lg:gap-8 p-2 ${yPosition < 80 && 'rounded-b'} ${!isOpen && 'hidden'}`}>
            {
                links.length > 0 && links.map((element, index) => {
                    return <Link key={index} href={element.link}><div className='text-indigo-800 hover:text-pink-500 font-bold'>{element.label}</div></Link>
                })
            }
        </div>
    )
}

export default Menu
