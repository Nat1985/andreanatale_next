import Advergames from "./contents/advergames/Advergames";
import Memory from "./contents/memory_game/Memory";
import Info from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Stack from "./contents/stack/Stack";
import TryVideogame from "./contents/tryVideogames/TryVideogames";
import Who from "./contents/who/Who";
import Sartorialita from "./contents/sartorialita/Sartorialita";
import TapGame from "./contents/tap_game/TapGame";
import LinkedinLink from "./contents/linkedin/LinkedinLink";
import YoutubeLink from "./contents/youtube/YoutubeLink";
import Instagram from "./contents/instagram/Instagram";
import Email from "./contents/email/Email";
/* import TestSection from "./contents/test_section/TestSection"; */

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6">
            {/* Info */}
            <Who />
            <Stack />
            <TapGame />
            <Potential />
            <Memory />
            <Info />
            <Sartorialita />
            <Advergames />
            {/* <TryVideogame /> */}
            <Instagram />
            <LinkedinLink />
            <YoutubeLink />
            <Email />
            {/* <TestSection /> */}
        </main>
    );
}