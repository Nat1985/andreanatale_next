"use client"
import { useEffect, useState } from "react";
import Ball from "./Ball";
import GameCopy from "@/app/components/GameCopy";
import useMainStore from "@/app/zustand/mainStore";
import Image from "next/image";
import useWindowWidth from "@/app/hooks/useWindowWidth";

const BallsContainer = () => {
    const renderBalls = (amount) => {
        const balls = [];
        for (let i = 0; i < amount; i++) {
            balls.push(<Ball key={i} isLight={randomLight === i ? true : false} setIsWin={setIsWin} />)
        };
        return balls;
    }

    const windowWidth = useWindowWidth();
    const timing = windowWidth > 768 ? 800 : 500
    const [randomLight, setRandomLight] = useState(0);
    // Aggiorno lo score in Zustand alla vittoria
    const [isWin, setIsWin] = useState(false);
    const { addPoints, isTap, setIsTap } = useMainStore();
    useEffect(() => {
        if (isWin && !isTap) {
            addPoints(1);
            setIsTap();
            return;
        } else if (!isWin && !isTap) {
            let previousRandom = randomLight;
            const interval = setInterval(() => {
                let randomNumber;
                while (randomNumber === previousRandom) {
                    randomNumber = Math.floor(Math.random() * 4);
                }
                setRandomLight(randomNumber);
                previousRandom === randomNumber;
            }, timing)

            // clean
            return () => clearInterval(interval)
        }

    }, [isWin, randomLight])

    return (
        <div className="h-[100px] flex flex-col justify-center w-full max-w-[768px]">
            {!isTap && <GameCopy>Acchiappa la pallina rosa!</GameCopy>}
            <div className="flex justify-evenly">
                {
                    !isTap &&
                    renderBalls(4)
                }
                {
                    isTap &&
                    <div className='h-full flex flex-col items-center justify-center gap-4'>
                        {<Image src='/icons/full_badge.png' width={48} height={48} />}
                    </div>
                }
            </div>
        </div>

    )
}

export default BallsContainer;