import React from 'react'
import Avatar from '../../Avatar'
import Image from 'next/image'

function SayHello() {
    return (
        <div className='w-full p-8 flex flex-col gap-8 items-center my-16 md:my-32 lg:my-64'>
            <Avatar />
            <div>
                <h1 className='hidden lg:block font-medium'>Say Hello.</h1>
                <h2 className='hidden md:block lg:hidden font-medium'>Say Hello.</h2>
                <h3 className='md:hidden font-medium'>Say Hello.</h3>
            </div>
            <div className='py-5 px-10 bg-white rounded-full flex gap-2'>
                <a href="mailto:info@tuodominio.com" className='text-xl'>andreanatale85@proton.me</a>
                <Image src="/icons/arrow-up-right.svg" alt="email" width={12} height={12} />
            </div>
            <div className='flex gap-8'>
                <a href="https://www.linkedin.com/in/andreanatale85"><Image src="/images/social/linkedin.png" alt="Linkedin" width={32} height={32} /></a>
                <a href="https://github.com/Nat1985"><Image src="/images/social/github.svg" alt="Linkedin" width={32} height={32} /></a>
                <a href="https://www.instagram.com/natcreativedev"><Image src="/images/social/instagram.svg" alt="Linkedin" width={32} height={32} /></a>
                <a href="https://www.youtube.com/@Andynat1985"><Image src="/images/social/youtube.svg" alt="Linkedin" width={32} height={32} /></a>
            </div>
        </div>
    )
}

export default SayHello
