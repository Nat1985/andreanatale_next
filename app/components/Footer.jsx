import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="text-white min-h-24 flex flex-col justify-center items-center p-2">
            <div className="flex gap-10 mx-8 my-16">

                <Link href="mailto:andreanatale85@proton.me">
                    <div className='max-w-16 min-w-8'>
                        <Image src="/icons/email.png" width={32} height={32} layout="responsive" />
                    </div>
                </Link>

                <Link href="https://www.youtube.com/@Andynat1985" target="_blank">
                    <div className='max-w-16 min-w-8'>
                        <Image src="/icons/youtube.png" width={32} height={32} layout="responsive" />
                    </div>
                </Link>

                <Link href="https://www.linkedin.com/in/andreanatale85" target="_blank">
                    <div className='max-w-16 min-w-8'>
                        <Image src="/icons/linkedin.png" width={32} height={32} layout="responsive" />
                    </div>
                </Link>

                <Link href="http://www.instagram.com/natcreativedev" target="_blank">
                    <div className='max-w-16 min-w-8'>
                        <Image src="/icons/instagram.png" width={32} height={32} layout="responsive" />
                    </div>
                </Link>

                <Link href="http://www.github.com/nat1985" target="_blank">
                    <div className='max-w-16 min-w-8'>
                        <Image src="/icons/github.png" width={32} height={32} layout="responsive" />
                    </div>
                </Link>

            </div>
            <div>www.andreanatale.com ®</div>
        </footer>
    )
}

export default Footer
