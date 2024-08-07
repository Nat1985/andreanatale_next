"use client"
import { useEffect, useState } from "react";
import Ball from "./Ball";

const ballsArray = [0, 1, 2, 3]
const BallsContainer = () => {
    const [randomLight, setRandomLight] = useState(0);
    const [isWin, setIsWin] = useState(false);
    useEffect(() => {
        if (isWin) {
            console.log('WIN!!!')
            return
        };

        let previousRandom = randomLight;
        const interval = setInterval(() => {
            let randomNumber;
            while (randomNumber === previousRandom) {
                randomNumber = Math.floor(Math.random() * 4);
            } 
                setRandomLight(randomNumber);
                previousRandom === randomNumber;
        }, 500)

        // clean
        return () => clearInterval(interval)
    }, [isWin, randomLight])
    return (
        <div className="flex justify-evenly">
            {
                !isWin && ballsArray.map(element => (<Ball key={element} isLight={randomLight === element ? true : false} setIsWin={setIsWin} />))
            }
            {
                isWin &&
                <div className='h-full flex flex-col items-center justify-center gap-4 cursor-pointer' onClick={() => setIsWin(false)}>
                    <img src='/icons/retry.png' width={48} height={48} />
                </div>
            }
        </div>
    )
}

export default BallsContainer;