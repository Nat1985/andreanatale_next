import React from 'react'
import Image from 'next/image'

function Avatar() {
    return (
        <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden relative md:shadow-xl">
            <Image
                src="/images/io.png"
                alt="Andrea Natale"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    )
}

export default Avatar
