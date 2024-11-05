"use client"

import React, { useEffect, useRef } from 'react'
import Feed from './components/Feed'
import ScrollPlaceholder from '../components/ScrollPlaceholder'
import useMainStore from '../zustand/mainStore';

function Portfolio() {

    // Assegno un punto alla scoperta di questa sezione
    // Controllo isPortfolioDiscovered in Zustand e se non è true assegno un punto a 'score' e imposto videogamesDiscovered true
    // useRef per far eseguire la condizione soltanto la prima volta che il componente viene montato e non sempre
    const initialEffect = useRef(true);
    const { addPoints, isPortfolioDiscovered, setPortfolioDiscovered } = useMainStore();
    useEffect(() => {
        if (initialEffect.current && isPortfolioDiscovered === false) {
            addPoints(1);
            setPortfolioDiscovered();
            initialEffect.current = false;
        }
    }, [isPortfolioDiscovered])
    return (
        <main className="mt-4 flex flex-col gap-4">
            <ScrollPlaceholder />
            <h2 className="text-center mb-4">Portfolio <span className="text-indigo-800">applicativi web</span></h2>

            <Feed />
        </main>
    )
}

export default Portfolio
