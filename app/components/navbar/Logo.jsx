import Link from 'next/link'
import React from 'react'

function logo() {
  return (
    <Link href="/"><div className='flex flex-col justify-center'>
      <h6 className='hidden md:block'>Andrea</h6>
      <h6 className='hidden md:block'>- Natale</h6>
      <h6 className='md:hidden'>A - N</h6>
    </div></Link>
  )
}

export default logo
