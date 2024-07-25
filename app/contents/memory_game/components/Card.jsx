"use client"

import React, { useEffect, useState } from 'react'
import { cardImages } from '../data/cardImages';

function Card({ index, front, handleCheckCards, isShow, destroyedCards, isChecking }) {
    // Il componente Card riceve il valore di front e lo setta ricevendo l'immagine da mostrare dall'array cardImages
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (front, cardImages) {
            setImage(cardImages[front])
        }
    }, [front, cardImages])

    const handleClick = () => {
        if (!isChecking) {
            handleCheckCards({ index, front });
        }
    }

    return (
        <div className='w-fit h-fit shadow-lg rounded-xl'>
            {
                !destroyedCards.includes(front) &&
                <div className={`w-[130px] h-[130px] overflow-hidden transform transition-transform duration-300 ease-in-out cursor-pointer`} onClick={handleClick}>
                    {isShow && <img src={image} />}
                </div>
            }

        </div>

    )
}

export default Card
