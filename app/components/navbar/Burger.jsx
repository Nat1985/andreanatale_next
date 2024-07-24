import React, { useEffect, useState } from 'react'
import { links } from '../../config/navbarLinks.js';
import useBurgerStore from '@/app/zustand/burgerStore.js';
import HouseIcon from '../../../public/icons/cross.svg';

function Burger() {
    const { isOpen, toggleBurger } = useBurgerStore();
    useEffect(() => {
        console.log({ isOpen })
    }, [isOpen])
    return (
            <div className={`h-12 w-12 flex flex-col justify-center items-center`} onClick={toggleBurger}>
                {!isOpen && <HouseIcon width={24} height={24} />}
            </div>

    )
}

export default Burger
