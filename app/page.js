import Advergames from "./contents/Advergames/Advergames";
import Info from "./contents/info/Info";
import Memory from "./contents/memory_game/Memory";
import Potential from "./contents/potential/Potential";
import Stack from "./contents/stack/Stack";
import VideogameDeveloper from "./contents/videogameDeveloper/VideogameDeveloper";
import WhatAdvergames from "./contents/WhatAdvergames/WhatAdvergames";

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {/* Info */}
            <Info />
            <Memory />
            <Advergames />
            <WhatAdvergames />
            <Stack />
            <Potential />
            <VideogameDeveloper />
        </main>
    );
}