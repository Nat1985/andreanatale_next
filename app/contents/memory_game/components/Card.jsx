"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Card({ index, front, handleCheckCards, isShow, destroyedCards, isChecking }) {

    // Setto i percorsi delle immagini in un array (da cui andrà a pescare front)
    const cardImages = [
        '/images/memory_cards/front1.png',
        '/images/memory_cards/front2.png'
    ]

    // Il componente Card riceve il valore di front e lo setta ricevendo l'immagine da mostrare dall'array cardImages
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (front === 0 || front === 1) {
            setImage(cardImages[front])
        }
    }, [front])

    const handleClick = () => {
        if (!isChecking) {
            handleCheckCards({ index, front });
        }
    }

    return (
        <div className='w-fit h-fit shadow-lg rounded-xl'>
            {
                !destroyedCards.includes(front) &&
                    <div className={`w-[130px] h-[130px] overflow-hidden transform transition-transform duration-300 ease-in-out cursor-pointer bg-slate-300 rounded-xl`} onClick={handleClick}>
                        {isShow && image && <Image src={image} alt={`Card image for ${front}`} width={130} height={130} />}
                    </div>
            }

        </div>

    )
}

export default Card
