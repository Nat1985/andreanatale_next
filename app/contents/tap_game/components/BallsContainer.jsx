"use client"
import { useEffect, useState } from "react";
import Ball from "./Ball";

const ballsArray = [0, 1, 2, 3]
const BallsContainer = () => {
    const [randomLight, setRandomLight] = useState(0);
    const [win, setWin] = useState(false);
    useEffect(() => {
        if (win) {
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
    }, [win, randomLight])
    return (
        <div className="flex justify-evenly">
            {
                ballsArray.map(element => (<Ball key={element} isLight={randomLight === element ? true : false} setWin={setWin} />))
            }
        </div>
    )
}

export default BallsContainer;