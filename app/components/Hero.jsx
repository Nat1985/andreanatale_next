import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className="flex flex-col">
            <div>Hello, I'm Andrea Natale</div>
            <div className="flex gap-2 items-end">
                <h1 className='hidden md:block'>Creative</h1>
                <h2 className='md:hidden'>Creative</h2>
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden relative">
                    <Image
                        src="/images/io.png"
                        alt="Andrea Natale"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <h1 className='hidden md:block'>- Developer</h1>
            <h2 className='md:hidden'>- Developer</h2>
        </div>
    )
}

export default Hero
