import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="text-white min-h-24 flex flex-col justify-center items-center p-2">
            <div className="flex gap-16 mx-8 my-16">

                <div className="max-w-[100px]">
                    <Link href="mailto:andreanatale85@proton.me" target="_blank"><Image src="/icons/email.png" width={32} height={32} layout="responsive" /></Link>
                </div>
                <div className="max-w-[100px]">
                    <Link href="https://www.youtube.com/@Andynat1985" target="_blank"><Image src="/icons/youtube.png" width={32} height={32} layout="responsive" /></Link>
                </div>
                <div className="max-w-[100px]">
                    <Link href="https://www.linkedin.com/in/andreanatale85" target="_blank"><Image src="/icons/linkedin.png" width={32} height={32} layout="responsive" /></Link>
                </div>
                <div className="max-w-[100px]">
                    <Link href="https://www.instagram.com/natcreativedev" target="_blank"><Image src="/icons/instagram.png" width={32} height={32} layout="responsive" /></Link>
                </div>

            </div>
            <div>www.andreanatale.com ®</div>
        </footer>
    )
}

export default Footer
