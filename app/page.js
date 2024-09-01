"use client"

import Memory from "./contents/memory_game/Memory";
import Info from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Who from "./contents/who/Who";
import TapGame from "./contents/tap_game/TapGame";
import LinkedinLink from "./contents/linkedin/LinkedinLink";
import YoutubeLink from "./contents/youtube/YoutubeLink";
import Instagram from "./contents/instagram/Instagram";
import Email from "./contents/email/Email";
import DragGame from "./contents/dragGame/DragGame";
import Makinario from "./contents/makinario/Makinario";

const componentsList = [
    <Who isBlack />,
    <TapGame />,
    <Potential isBlack />,
    <Memory />,
    <Info isBlack />,
    <DragGame />,
    <Makinario isBlack />,
    <Instagram />,
    <LinkedinLink isBlack />,
    <YoutubeLink />,
    <Email isBlack />
]

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 lg:gap-0">
            {
                componentsList && componentsList.map((element, index) => (
                    <div key={index}>{element}</div>
                ))
            }
        </main>
    );
}