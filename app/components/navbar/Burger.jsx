"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import useMainStore from '@/app/zustand/mainStore.js';

function Burger() {
    const { isOpen, setBurger } = useMainStore();
    return (
            <div className={`h-12 w-12 flex flex-col justify-center items-center cursor-pointer`}>
                {!isOpen && <div onClick={() => setBurger(true)}><Image src='icons/menu-burger.svg' width={24} height={24} alt="Menu icon" /></div>}
                {isOpen && <div onClick={() => setBurger(false)}><Image src='icons/cross.svg' width={24} height={24} alt="Menu icon" /></div>}
            </div>

    )
}

export default Burger
