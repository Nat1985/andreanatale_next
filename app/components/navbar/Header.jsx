import React from 'react'
import Image from 'next/image';
import Burger from './Burger';

function Header() {
  const avatar = "/images/avatar.png";
  return (
    <div className='bg-white w-full flex justify-between'>

      {/* Title & Avatar */}
      <div className="flex gap-2 items-center">
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <Image src={avatar} alt="Avatar" width={48} height={48} />
        </div>
        <h1 className='text-lime-400'>Andrea Natale</h1>
      </div>

      {/* Burger menu */}

      <Burger />

    </div>
  )
}

export default Header;
