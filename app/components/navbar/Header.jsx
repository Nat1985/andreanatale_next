import React from 'react'
import Image from 'next/image';
import Burger from './Burger';

function Header() {
  const avatar = "/images/avatar.png";
  return (
    <div className='bg-white w-full flex justify-between rounded'>

      {/* Title & Avatar */}
      <div className="flex gap-2 items-center">
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <Image src={avatar} alt="Avatar" width={48} height={48} />
        </div>
        <h3 className='text-lime-400 sm:hidden'>Andrea Natale</h3>
        <h2 className='text-lime-400 hidden sm:block md:hidden'>Andrea Natale</h2>
        <h1 className='text-lime-400 hidden md:block'>Andrea Natale</h1>
        {/* <h4 className='text-lime-400'>Andrea Natale</h4> */}
      </div>

      {/* Burger menu */}

      <Burger />

    </div>
  )
}

export default Header;
