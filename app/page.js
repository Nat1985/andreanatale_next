"use client"

import Memory from "./contents/memory_game/Memory";
import Info from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Stack from "./contents/stack/Stack";
import TryVideogame from "./contents/tryVideogames/TryVideogames";
import Who from "./contents/who/Who";
import TapGame from "./contents/tap_game/TapGame";
import LinkedinLink from "./contents/linkedin/LinkedinLink";
import YoutubeLink from "./contents/youtube/YoutubeLink";
import Instagram from "./contents/instagram/Instagram";
import Email from "./contents/email/Email";
import DragGame from "./contents/dragGame/DragGame";
import Makinario from "./contents/makinario/Makinario";
import { useState } from "react";

export default function Home() {
    const [componentsList] = useState([
        <Who key={1} isBlack />,
        <TapGame key={2} />,
        <Potential key={3} isBlack />,
        <Memory key={4} />,
        <Info key={5} isBlack />,
        <DragGame key={6} />,
        <Makinario key={7} isBlack />,
        <Instagram key={8} />,
        <LinkedinLink key={9} isBlack />,
        <YoutubeLink key={10} />,
        <Email isBlack />
    ])
    return (
        <main className="mt-4 flex flex-col gap-4 lg:gap-0">
            {
                componentsList && componentsList.map((element, index) => {
                    return {element}
                })
            }
        </main>
    );
}