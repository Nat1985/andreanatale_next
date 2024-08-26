import Advergames from "./contents/advergames/Advergames";
import Info from "./contents/sartorialita/sartorialita";
import Memory from "./contents/memory_game/Memory";
import Mern from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Stack from "./contents/stack/Stack";
import VideogameDeveloper from "./contents/videogameDeveloper/VideogameDeveloper";
import WhatAdvergames from "./contents/WhatAdvergames/WhatAdvergames";
import Who from "./contents/who/Who";
import Sartorialita from "./contents/sartorialita/sartorialita";
import TapGame from "./contents/tap_game/TapGame";
import TestSection from "./contents/test_section/TestSection";
import LinkedinLink from "./contents/linkedin/LinkedinLink";
import YoutubeLink from "./contents/youtube/YoutubeLink";

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {/* Info */}
            <Who />
            <Stack />
            <TapGame />
            <Potential />
            <Memory />
            <Mern />
            <Sartorialita />
            <Advergames />
            <WhatAdvergames />
            <VideogameDeveloper />
            <LinkedinLink />
            <YoutubeLink />
            {/* <TestSection /> */}
        </main>
    );
}