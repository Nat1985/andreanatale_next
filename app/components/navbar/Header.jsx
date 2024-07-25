import React from 'react'
import Image from 'next/image';
import Burger from './Burger';

function Header() {
  const avatar = "/images/avatar.png";
  return (
    <div className='bg-white w-full flex justify-between rounded p-2'>

      {/* Title & Avatar */}
      <div className="flex gap-2 items-center">
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <Image src={avatar} alt="Avatar" width={48} height={48} />
        </div>
      </div>

      {/* Burger menu */}

      <Burger />

    </div>
  )
}

export default Header;
