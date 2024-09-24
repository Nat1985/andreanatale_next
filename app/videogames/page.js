"use client"

import { useEffect, useRef } from "react";
import Panel from "../components/Panel";
import useMainStore from "../zustand/mainStore";
import VideogameCard from "./components/VideogameCard";
import { videogames } from "./data/videogameList";

export default function VideogamePortfolio() {

    // Assegno un punto alla scoperta di questa sezione
    // Controllo videogamesDiscovered in Zustand e se non è true assegno un punto a 'score' e imposto videogamesDiscovered true
    // useRef per far eseguire la condizione soltanto la prima volta che il componente viene montato e non sempre
    const initialEffect = useRef(true);
    const {addPoints, isVideogamesDiscovered, setVideogamesDiscovered} = useMainStore();
    useEffect(() => {
        if(initialEffect.current && isVideogamesDiscovered === false) {
            addPoints(1);
            setVideogamesDiscovered();
            initialEffect.current = false;
        }
    }, [isVideogamesDiscovered])

    return (
        <main className="mt-4 flex flex-col gap-4">
            <Panel>
                <div className="w-full flex flex-col gap-8">
                    {
                        videogames &&
                        videogames.map((element, index) => {
                            return <VideogameCard key={index} title={element.title} text={element.text} image={element.image} gameLink={element.gameLink} isReverse={index % 2 && true} />
                        })
                    }
                </div>
            </Panel>
        </main>
    )
}