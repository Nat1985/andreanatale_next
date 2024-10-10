import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <footer className="text-white min-h-24 flex flex-col justify-center items-center p-2">
            <div className="flex gap-16 mx-8 my-16">

                <div>
                    <Image src="/icons/email.png" width={32} height={32} layout="responsive" />
                </div>

                <div>
                    <Image src="/icons/youtube.png" width={32} height={32} layout="responsive" />
                </div>
                <div>
                    <Image src="/icons/linkedin.png" width={32} height={32} layout="responsive" />
                </div>
                <div>
                    <Image src="/icons/instagram.png" width={32} height={32} layout="responsive" />
                </div>



            </div>
            <div>www.andreanatale.com ®</div>
        </footer>
    )
}

export default Footer
