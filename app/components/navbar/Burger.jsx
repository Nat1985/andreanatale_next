"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { links } from '../../config/navbarLinks.js';
import useBurgerStore from '@/app/zustand/zustandStore.js';

function Burger() {
    const { isOpen, toggleBurger } = useBurgerStore();
    return (
            <div className={`h-12 w-12 flex flex-col justify-center items-center cursor-pointer`} onClick={toggleBurger}>
                {!isOpen && <Image src='icons/menu-burger.svg' width={24} height={24} alt="Menu icon" />}
                {isOpen && <Image src='icons/cross.svg' width={24} height={24} alt="Menu icon" />}
            </div>

    )
}

export default Burger
