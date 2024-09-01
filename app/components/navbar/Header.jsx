"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Burger from './Burger';
import useMainStore from '@/app/zustand/mainStore';
import useScrollPosition from '@/app/hooks/useScrollPosition';
import Menu from './Menu';
import Score from './Score';
import Link from 'next/link';

function Header() {
  const avatar = "/images/avatar.png";
  const yPosition = useScrollPosition();
  const { isOpen, setBurger } = useMainStore();

  // Sretto isOpen su false solo una volta se avviene lo scroll verso il basso
  const [isScrolledOnce, setIsScrolledOnce] = useState(false);
  useEffect(() => {
    if (yPosition > 80 && !isScrolledOnce) {
      setBurger(false);
      setIsScrolledOnce(true);
    }
    if (yPosition < 80 && isScrolledOnce) setIsScrolledOnce(false)
  }, [yPosition])
  return (
    <div className={`flex flex-col gap-1 ${yPosition > 80 && 'fixed top-0 left-0 right-0 shadow-xl'} z-40`}>

      {/* Primo blocco */}
      <div className={`bg-white w-full flex justify-between p-2 ${yPosition < 80 && (isOpen ? 'rounded-t' : 'rounded')}`}>

        {/* Questo div sposta l'avatar e score in centro da lg in su */}
        <div className='hidden lg:block'>

        </div>

        {/* Avatar & Score */}

        <div className="flex items-center">
          <div className='rounded-full overflow-hidden'>
            <Link href="/">
              <Image src={avatar} alt="Avatar" width={48} height={48} />
            </Link>
          </div>
          <Score />
        </div>



        {/* Burger menu */}
        <Burger />

      </div>

      {/* Blocco menu */}
      <Menu yPosition={yPosition} isOpen={isOpen} />

    </div>

  )
}

export default Header;
